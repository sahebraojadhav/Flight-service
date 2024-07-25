const express=require('express');
const router=express.Router();

console.log('v1 is working fine');

const v1ApiRoutes=require('./v1/index')
router.use('/v1',v1ApiRoutes);

module.exports=router;