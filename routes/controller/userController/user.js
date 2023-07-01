const express = require('express');
const router = express.Router();
const LoginService = require('../../service/userService/LoginService')


router.get('/login', (req, res, next) => {
    /*
    if(req.auth) res.send("<script>alert('이미 로그인하셨습니다');window.location.replace('/')</script>");
    else return res.status(200).render('user/login');
    */
   return res.send("loginpage");
});


router.post('/login', (req, res, next) => {
    const authDTO = req.body;
    const LoginResult = LoginService.doLogin(authDTO);
    LoginResult.then((token)=>{
        console.log(token)
        if(token){
                    res.cookie("user", token, {
                        expires : new Date(Date.now() + 60 * 60 * 1000 * 24)
                    })
            //return res.send(true);
            return res.send(token);
        }else res.send(false);
    })
});
module.exports = router;