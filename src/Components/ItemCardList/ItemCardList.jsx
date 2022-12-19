import './Card';
import Card from './Card';

function ItemCardList() {
    return ( 
        <div className="container text-center"> 
            <div className="row"> 
               <Card/>
               <Card/>
               <Card/> 
               <Card/> 
            </div>       
        </div>     
    );
}
  
export default ItemCardList;