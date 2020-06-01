const express = require('express');
const app = express();
const postRoute = express.Router();
multer = require('multer');
let createError = require('http-errors');
// post model
let Post = require('../model/Post');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})


const upload = multer({ storage: storage })
//Add post

postRoute.post('/add-post',upload.single('post_image'),function(req, res, next) {

  if(!req.file) {
    res.status(500);
    return next(err);
  }
  filepath = req.file.path+''+req.file.originalname.split('.')[1];
console.log(req.body);
  const post = new Post({
    post_title : req.body.post_title,
    post_description: req.body.post_description,
    post_image : filepath
      });
      
      post.save();

  res.json({ fileUrl: 'http://127.0.0.1:8000/uploads/' +filepath });
 });



// postRoute.route('/add-post').post((req, res, next) => {

//   const post = new Post({
// post_title = req.body.post_title,
// post_description = req.body.post_description,
// post_image = req.body.post_description,
//   });
//   // Post.create(req.body, (error, data) => {
//   //   if (error) {
//   //     return next(error)
//   //   } else {
//   //     res.json(data)
//   //   }
//   // });
// });



// Get all post
postRoute.route('/post').get((req, res) => {
    Post.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// // Get single student
// studentRoute.route('/read-student/:id').get((req, res) => {
//   Student.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })


// // Update student
// studentRoute.route('/update-student/:id').put((req, res, next) => {
//   Student.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('Student successfully updated!')
//     }
//   })
// })

// // Delete student
// studentRoute.route('/delete-student/:id').delete((req, res, next) => {
//   Student.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

module.exports = postRoute;