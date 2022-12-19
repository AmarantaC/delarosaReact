import './NavItem/NavItem.jsx';
import NavItem from './NavItem/NavItem';
import './NavItem/DropItem.jsx';
import DropItem from './NavItem/DropItem';
import './NavItem/Bag.jsx';
import Bag from './NavItem/Bag';


function NavBar() {
    return ( 
        <header> 
          <nav className="navbar navbar-expand-lg navbar-light d-flex">
            <a className="navbar-brand" href="/">Tienda Increible</a>            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>              
            </button>          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <NavItem href="/nosotros">Nosotros</NavItem>
              <NavItem href="/politicas">Politicas</NavItem>                
                <li className="nav-item dropdown">                 
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Productos
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <DropItem href="/algunos">Algunos Productos</DropItem>
                    <DropItem href="/otros">Otros Productos</DropItem>
                    <DropItem href="/mas">Más Productos</DropItem>
                  </div>
                </li>
              </ul>      
            </div>
            <Bag></Bag>             
            </nav> 
               
        </header>     
    );
}
  
export default NavBar;