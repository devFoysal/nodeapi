const Category = require("../models/Category");

//@desc     Get all categories
//@route    GET /api/v1/categories
//@access   Public

exports.getCtegories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Bad request",
    });
  }
};

//@desc     Get single category
//@route    GET /api/v1/categories/:id
//@access   Public

exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.find({ _id: req.params.id });
    if (!category)
      return res.status(400).json({
        success: false,
      });
    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Bad request",
    });
  }
};

//@desc     Crate new Category
//@route    POST /api/v1/categories/:id
//@access   Private

exports.createCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({
      success: true,
      message: "Create new category",
      date: category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error.code === 11000
          ? "Duplicate entry. Please try another"
          : "Bad request",
    });
  }
};

//@desc     Update category
//@route    PUT /api/v1/categories/:id
//@access   Private

exports.updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!category)
      return res.status(400).json({
        success: false,
      });
    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Bad request",
    });
  }
};

//@desc     Delete category
//@route    DELETE /api/v1/categories/:id
//@access   Private

exports.deleteCategory = async (req, res, next) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category)
          return res.status(400).json({
            success: false,
          });
        res.status(200).json({
          success: true,
          data: {},
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: "Bad request",
        });
      }
};
