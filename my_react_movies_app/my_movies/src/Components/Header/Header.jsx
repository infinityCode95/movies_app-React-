import './Header.css';

function Header() {
     return (
          <div className="header__wrapper">
               <div className="header__container">
                    <div className="header__flex">
                         <div className="header__logo">
                              <i className="fa-solid fa-video fa-lg"></i>
                         </div>
                         <div className="header__title">
                              Movies                         
                         </div>  
                    </div>    
               </div>
          </div>
     )
}

export default Header;

