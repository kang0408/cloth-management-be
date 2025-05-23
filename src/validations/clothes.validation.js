const baseJoi = require("./base.joi");
const { default: httpStatus } = require("http-status");
const { errorResponse } = require("../helpers/response.helper");

module.exports.createCloth = async (req, res, next) => {
  const clothSchema = baseJoi.object({
    title: baseJoi.string().min(5).max(255).required(),
    description: baseJoi.string().min(5).max(255).required(),
    price: baseJoi.number().min(0).messages({
      "number.min": "Invalid price."
    }),
    discountPercentage: baseJoi.number().min(0).max(100).messages({
      "number.min": "Invalid discount percentage.",
      "number.max": "Discount percentage cannot exceed 100%."
    }),
    stock: baseJoi.number().min(0).messages({
      "number.min": "Invalid stock quantity."
    }),
    thumbnail: baseJoi.string(),
    status: baseJoi.string().valid("active", "inactive").optional(),
    categories: baseJoi.string().optional()
  });

  const response = clothSchema.validate(req.body);

  if (response.error) return errorResponse(res, response.error, httpStatus.BAD_REQUEST);
  else {
    next();
  }
};

module.exports.editCloth = async (req, res, next) => {
  const clothSchema = baseJoi.object({
    title: baseJoi.string().min(5).max(255),
    description: baseJoi.string().min(5).max(255),
    price: baseJoi.number().min(0).messages({
      "number.min": "Invalid price."
    }),
    discountPercentage: baseJoi.number().min(0).max(100).messages({
      "number.min": "Invalid discount percentage.",
      "number.max": "Discount percentage cannot exceed 100%."
    }),
    stock: baseJoi.number().min(0).messages({
      "number.min": "Invalid stock quantity."
    }),
    thumbnail: baseJoi.string(),
    status: baseJoi.string().valid("active", "inactive").optional(),
    categories: baseJoi.string().optional()
  });

  const response = clothSchema.validate(req.body);

  if (response.error) return errorResponse(res, response.error);
  else {
    next();
  }
};
