let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dataBaseConfig = require('./database/db'),
  multer = require('multer');
  let router = express.Router();
  let createError = require('http-errors');

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



// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
    console.log('Database connected sucessfully ')
  },
  error => {
    console.log('Could not connected to database : ' + error)
  }
)

// Set up express js port
const postRoute = require('./routes/post.route')




const app = express();

app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));


  // RESTful API root
  app.use('/api', postRoute);


// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Connected to port ' + port)
});

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

// // Index Route
// app.post('/',upload.single('image'), (req, res) => {
//   res.send('invaild endpoint');
// });


// // Index Route
// app.post('/add-post',upload.single('image') ,(req, res, next) => {
//  // req.body.post_image=req.file.filename;

// //  if (!files) {
// //   const error = new Error('Please choose files')
// //   error.httpStatusCode = 400
// //   return next(error)
// // }




//   console.log(req.file);
//   //console.log('ankit');
// });




// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});