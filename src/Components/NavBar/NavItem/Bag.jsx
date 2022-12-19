const Bag= () => {
 
    return (
        <div className="p-2 flex-column  position-relative">
        <button type="button" className="btn btn-primary">
           <i className="fa-solid fa-bag-shopping"></i>
           <span className="position-absolute  translate-middle badge rounded-pill bg-secondary">
           5
           </span>
        </button>
        </div> 
    );
  };
  
  export default Bag;