const express = require('express');
const router = express.Router();
const Items = require('../modal/items');

// const multer = require("multer");

// const MIME_TYPE_MAP = {
//     'image/png': 'png',
//     'image/jpeg': 'jpg',
//     'image/jpg': 'jpg'
// }

// const storage = multer.diskStorage({
//     destination: (req,file,cb) => {
//         const isValid = MIME_TYPE_MAP[file.mimetype];
//         let error = new Error("Invalid Mime Type");
//         if(isValid){
//             error = null
//         }
//         cb(error, "backend/images");
//     },

//     filename: (req,file,cb) => {
//         const name = file.originalname.toLowerCase().split(' ').join('-');
//         const ext = MIME_TYPE_MAP[file.mimetype];
//         cb(null, name + '-' + Date.new() + '.' + ext);
//     }
// });


// router.post('/images',  multer(storage).single("image"),(req,res) => {
    
// })

router.post('/items', (req,res) => {
    const item = new Items({
        product:req.body.product,
        airflow:req.body.airflow,
        power:req.body.power,
        sound:req.body.sound,
        diameter:req.body.diameter
    })

    item.save().then(result => {
        res.json({
            message: "Added new item",
            result
        })
    }).catch(err => {
        res.json({ error: err})
    })
})


// get 
router.get('/items', (req,res) => {
    const item = Items.find();
    item.then(data => {
        res.json({
            data
        })
    })
})

module.exports = router;