const express = require('express');
const router = express.Router();
const Usercontroller = require('../../controllers/Usercontroller')
const verifyToken = require('../../middlewares/VerifyToken');

const Joi = require('joi');
const { verify } = require('jsonwebtoken');

    const userValidationSchema = Joi.object({
        username: Joi.string().alphanum().required().messages({
            'any.required':`"username" khong duoc bo trong!`
        }),
        email: Joi.string().email().required(),
        age: Joi.number().min(18).required(),
        phone: Joi.string().min(10).max(11).required()
    });

    // Middleware kiểm tra và xác thực dữ liệu
    const validateUserData = (req, res, next) => {
    const { error, value } = userValidationSchema.validate(req.body, {abortEarly: false});
    console.log(error)
    if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
      return res.status(400).json({ errors: errorMessages });
    }
  
    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
};


router.post('/',validateUserData, verifyToken ,userController.create)
router.get('/',userController.getAll)
router.put('/:id',userController.update)
router.delete('/:id',userController.delete)
module.exports = router;

