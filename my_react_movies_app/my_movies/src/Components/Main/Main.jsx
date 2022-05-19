import React from 'react';
import Movies from '../Movies/Movies';
import Search from '../Search/Search';

import './Main.css';

class Main extends React.Component {

     state = {
          movies: [],
          loading: true,  
     }

     componentDidMount() {
          fetch('http://www.omdbapi.com/?apikey=ad4dcf3c&s=Lord of the Rings')
               .then(response => response.json())
               .then(data => this.setState({movies: data.Search, loading: false}))
     }

     searchMovies = (searchString, type = 'all') => {

          this.setState({loading: true});

          fetch(`http://www.omdbapi.com/?apikey=ad4dcf3c&s=${searchString}${type !== 'all' ? `&type=${type}` : ''}`)
               .then(response => response.json())
               .then(data => this.setState({movies: data.Search, loading: false}))     
     }

     render() {
          return (
               <div className="main">
                    <div className="main__wrapper"> 

                         <Search searchMovies={this.searchMovies}/>

                         {this.state.loading ? <h3>Loading...</h3> : <Movies movies={this.state.movies}/>}
                    </div>
               </div>
          )
     }     
}

export default Main;