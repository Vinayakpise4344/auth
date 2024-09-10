const ensureAuthet = require('../Middleware/Auth');

const router = require('express').Router();
router.get('/',ensureAuthet,(req,res)=>{
    res.status(200).json([{
        name:"mobile",
        price:1000

    },
    {
        name:"tv",
        price:10000
    }
])
});
module.exports = router;