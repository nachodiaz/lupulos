const   express   = require('express'),
        session   = require('express-session'),
     MongoStore   = require('connect-mongo')(session),
       mongoose   = require('mongoose'),
       passport   = require('passport'),
         router   = express.Router(),
        Usuario   = require('../models/Usuarios'),
       Cervezas   = mongoose.model('cervezas'),
  LocalStrategy   = require('passport-local').Strategy,
           cors   = require('cors');

module.exports = function (app) {
  app.use('/', router);

};

const app = express();

router.get('/editar', function(req, res, next){

})

router.post('/editar/:item', function(req,res,next){



})
