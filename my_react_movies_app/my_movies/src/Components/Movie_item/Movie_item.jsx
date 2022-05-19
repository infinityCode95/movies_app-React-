import './Movie_item.css';

function MovieItem(props) {
     return (
          <div className="movie__item">
               <div className="item__wrapper">
                    <div className="item__flex">
                         <div className="item__logo">
                              <img className='logo' src={props.Poster}  alt="image"/>     
                         </div>
                         <div className="item__text">
                              <div className="item__title">
                                   {props.Title}     
                              </div>
                              <div className="item__description">
                                   {props.Year}, <span>{props.Type}</span>
                              </div>
                         </div>
                    </div>
               </div>
          </div>     
     )
}

export default MovieItem;