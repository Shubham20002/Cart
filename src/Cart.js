
import CartItem from "./CartItem";

const Cart=(props)=>{
       const {product}=props;
        console.log(props);
        return( 
         <>
        {product.map((product,index)=>(<CartItem product={product}
         onincresequantity={props.onincresequantity}
         ondecresequantity={props.ondecresequantity}
         ondeleteproduct={props.ondeleteproduct}
          key={index}/>))}
        </>
        )
        
    }


export default Cart;