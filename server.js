const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const errorHandelar = require('./middleware/errorHandeler');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({path:'./config/config.env'})

// Connect to database
connectDB();

// Route files
const products = require('./routes/products');
const categories = require('./routes/categories');


const app = express();

// Body parser
app.use(express.json())

// Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// Mount routers
app.use("/api/v1/products", products)
app.use("/api/v1/categories", categories)

app.use(errorHandelar)

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT,  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

// Handel unhandled promise rejectiona
process.on('unhandledRejection', (error, promise) => {
    console.log(`Error ${error.message}`)
    // Close server & exit process
    server.close(process.exit(1))
});