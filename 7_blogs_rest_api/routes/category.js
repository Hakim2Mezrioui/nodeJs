const express = require("express");
const { cateogryController } = require("../controllers");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");
const { addCategoryValidator, idValidator } = require("../validators/category");
const validate = require("../validators/validate");
const router = express.Router();

router.post(
  "/add-category",
  isAuth,
  isAdmin,
  addCategoryValidator,
  cateogryController.addCategory
);
router.put(
  "/update-category/:id",
  isAuth,
  isAdmin,
  idValidator,
  validate,
  cateogryController.updateCategory
);
router.delete(
  "/delete-category/:id",
  isAuth,
  isAdmin,
  idValidator,
  validate,
  cateogryController.deleteCategory
);
router.get(
  "/search-categories",
  isAuth,
  isAdmin,
  idValidator,
  validate,
  cateogryController.getCategories
);
router.get(
  "/detail-category/:id",
  isAuth,
  idValidator,
  validate,
  cateogryController.getCategory
);

module.exports = router;
