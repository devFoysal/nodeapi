//@desc     Get all products
//@route    GET /api/v1/products
//@access   Public

exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Show all products"
    })
}


//@desc     Get single product
//@route    GET /api/v1/products/:id
//@access   Public

exports.getProduct = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Show single products ${req.params.id}`
    })
}


//@desc     Crate new product
//@route    POST /api/v1/products/:id
//@access   Private

exports.createProduct = (req, res, next) => {
    res.status(201).json({
        success: true,
        message: "Create new product"
    })
}


//@desc     Update product
//@route    PUT /api/v1/products/:id
//@access   Private

exports.updateProduct = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Update product ${req.params.id}`
    })
}


//@desc     Delete product
//@route    DELETE /api/v1/products/:id
//@access   Private

exports.deleteProduct = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Delete product ${req.params.id}`
    })
}