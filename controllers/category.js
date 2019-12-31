let router = require('express').Router();
let api = require('../api/category'); 

router.post('/create', (req, res)=>{

    api.createCategory(req.body,(err, product)=>{
        
        if(err){
            res.status(500).json(err);
        }else{
            res.json(product);
        }

    });

})

router.post('/toggleState', (req, res)=>{

    api.toggleCategory(req.body,(err, product)=>{
        
        if(err){
            res.status(500).json(err);
        }else{
            res.json(product);
        }

    });

})


module.exports = router;