const NavItem = ({ href, children}) => {
 
    return (
      <li className="nav-item">
        <a className="nav-link" href={href}>
          {children}
          <span class="sr-only">(current)</span>
        </a>
      </li>
    );
  };
  
  export default NavItem;

