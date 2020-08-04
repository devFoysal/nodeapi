//@desc     Get all categories
//@route    GET /api/v1/categories
//@access   Public

exports.getCtegories = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Show all categories"
    })
}


//@desc     Get single category
//@route    GET /api/v1/categories/:id
//@access   Public

exports.getCategory = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Show single category ${req.params.id}`
    })
}


//@desc     Crate new Category
//@route    POST /api/v1/categories/:id
//@access   Private

exports.createCategory = (req, res, next) => {
    res.status(201).json({
        success: true,
        message: "Create new category"
    })
}


//@desc     Update category
//@route    PUT /api/v1/categories/:id
//@access   Private

exports.updateCategory = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Update category ${req.params.id}`
    })
}


//@desc     Delete category
//@route    DELETE /api/v1/categories/:id
//@access   Private

exports.deleteCategory = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Delete category ${req.params.id}`
    })
}