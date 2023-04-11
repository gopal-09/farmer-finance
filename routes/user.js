const express=require('express')
const {login,signup,income,expense,maketransaction,gettransaction}=require('../controllers/user')
const router=express.Router()
router.post('/login',login)
router.post('/signup',signup)
router.post('/income',income)
router.post('/expense',expense)
router.post('/mtransaction',maketransaction)
router.get('/gtransaction/:name',gettransaction)


module.exports = router