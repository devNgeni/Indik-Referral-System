const express = require('express');
const router = express.Router();
const requireAuth  = require("./../middlewares/require-auth")
const { validateToken } = require("../middlewares/validateToken");
const cleanBody = require('../middlewares/cleanbody');
const AuthController = require('../src/users/user.controller');

router.post("/signup", cleanBody, AuthController.Signup, (request, response) => {
    const signedUpuser = new signUpTemplateCopy({
        fullName: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        phone: request.body.phone,
        password: bcrypt.hashSync(request.body.password, 8),
        token: generateToken(signedUpuser),
    });
    signedUpuser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
});

router.patch("/activate", cleanBody, AuthController.Activate);

router.post("/login", cleanBody, AuthController.Login);

router.patch("/forgot", cleanBody, AuthController.ForgotPassword);

router.patch("/reset", cleanBody, AuthController.ResetPassword);

router.get("/referred", validateToken, requireAuth, AuthController.ReferredAccounts);

router.get("/logout", validateToken, requireAuth,  AuthController.Logout);

router.put("/profile", cleanBody, requireAuth, AuthController.updatedProfile);


module.exports = router; 