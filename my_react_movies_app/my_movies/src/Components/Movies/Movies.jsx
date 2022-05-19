import MovieItem from "../Movie_item/Movie_item";

import './Movies.css';

function Movies(props) {

     const {movies = []} = props;

     return (
          <div className="movies">
               <div className="movies__wrapper">
                    <div className="movies__flex">
                         {movies.length ? (movies.map((movie) => {
                              return <MovieItem key={movie.imdbID} {...movie}/>
                         })) : (<h3>Ничего не найдено</h3>)}
                    </div>
               </div>
          </div>
     )
}

export default Movies;