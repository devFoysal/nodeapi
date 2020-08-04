const ErrorResponse = require("../utils/errorResponse");
const asyncHandeler = require("../middleware/asyncHandeler");
const Category = require("../models/Category");

//@desc     Get all categories
//@route    GET /api/v1/categories
//@access   Public

exports.getCtegories = asyncHandeler(async (req, res, next) => {
  const categories = await Category.find();
  res.status(200).json({
    success: true,
    count: categories.length,
    data: categories,
  });
});

//@desc     Get single category
//@route    GET /api/v1/categories/:id
//@access   Public

exports.getCategory = asyncHandeler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category)
    return next(
      new ErrorResponse(`Category not found with id of ${req.params.id}`, 404)
    );
  res.status(200).json({
    success: true,
    data: category,
  });
});

//@desc     Crate new Category
//@route    POST /api/v1/categories/:id
//@access   Private

exports.createCategory = asyncHandeler(async (req, res, next) => {
  const category = await Category.create(req.body);
  res.status(201).json({
    success: true,
    message: "Create new category",
    date: category,
  });
});

//@desc     Update category
//@route    PUT /api/v1/categories/:id
//@access   Private

exports.updateCategory = asyncHandeler(async (req, res, next) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!category)
    return next(
      new ErrorResponse(`Category not found with id of ${req.params.id}`, 404)
    );
  res.status(200).json({
    success: true,
    data: category,
  });
});

//@desc     Delete category
//@route    DELETE /api/v1/categories/:id
//@access   Private

exports.deleteCategory = asyncHandeler(async (req, res, next) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category)
    return next(
      new ErrorResponse(`Category not found with id of ${req.params.id}`, 404)
    );
  res.status(200).json({
    success: true,
    data: {},
  });
});
