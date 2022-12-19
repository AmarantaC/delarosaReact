const DropItem = ({ href, children }) => {
 
    return (     
        <a class="dropdown-item" href={href}>
          {children}
          <span class="sr-only">(current)</span>
        </a>     
    );
  };
  
export default DropItem;