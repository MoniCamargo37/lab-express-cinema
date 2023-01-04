const express = require('express');
const router = express.Router();
const Movie = require ("../models/Movie.model");
const movies = require('../seeds/movies.seed');


/* GET Home page */

 router.get('/',  (req, res, next) => res.render('index'));

  /* GET movies page */
 
 router.get('/movies', async (req, res, next) => {
    Movie.find()
      .then((movies) => {
        console.log('las pelis', movies);
        res.render('movies', { movies } );
      })
   .catch (error=> {console.log('error!', error); next(error);})
  });


  /* GET movie page */

router.get('/movies/:movieId', (req, res, next) => {
    const id = req.params.movieId;
    Movie.findById(id)
      .then((movie) => {
        res.render("movie-Details", movie);
      })
      .catch((error) => {
        console.log('error!', error);
        next(error);
      });
  });
module.exports = router;