import React from 'react';

import './Search.css';

class Search extends React.Component {

     state = {
          search: '',
          type: 'all',
     }

     handleSearch = () => {
          this.props.searchMovies(this.state.search, this.state.type);
     }

     filterMovies = (e) => {
          this.setState(() => ({type: e.target.dataset.type}), () => {this.props.searchMovies(this.state.search, this.state.type)})
     }

     render() {
          return (
               <div className="search">
                    <div className="search__wrapper">
                         <div className="search__input">
                              <input 
                                   placeholder='Поиск' 
                                   type="search" 
                                   className='input'
                                   value={this.state.search}
                                   onChange={(e) => this.setState({search: e.target.value})}
                              />
                         </div> 
                         
                         <button onClick={() => this.props.searchMovies(this.state.search, this.state.type)} className='search__btn'>Найти</button>                        
                    </div>

                    <div className="filter">
                         <div className="filter__wrapper">
                              <div className="filter__all">
                                   <label>
                                        <input 
                                             name='type' 
                                             type="radio" 
                                             data-type='all'
                                             onChange={this.filterMovies}
                                             checked={this.state.type === 'all'}                                                
                                        />
                                        <span>Все</span>
                                   </label>
                              </div>
                              <div className="filter__all">
                                   <label>
                                        <input 
                                             name='type' 
                                             type="radio"
                                             data-type='movie'
                                             onChange={this.filterMovies}
                                             checked={this.state.type === 'movie'}  
                                        />
                                        <span>Фильмы</span>
                                   </label>
                              </div>
                              <div className="filter__all">
                                   <label>
                                        <input 
                                             name='type' 
                                             type="radio" 
                                             data-type='series'
                                             onChange={this.filterMovies}
                                             checked={this.state.type === 'series'}    
                                        />
                                        <span>Сериалы</span>
                                   </label>
                              </div>
                         </div>    
                    </div>
               </div>
          )
     }
}

export default Search;   