const express=require('express');
const router=express.Router();
const repository=require('../../repository/index')
console.log(repository);

console.log("v2 is working fine");

router.post('/user',repository.createUser);
router.get('/user',repository.findUser);

module.exports=router;