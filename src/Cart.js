import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{

    constructor () {
        super();
        this.state = {
           products: [
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 0,
                img: '',
                id:1
            },
            {
                price: 1999,
                title: 'Laptop',
                qty: 0,
                img: '',
                id:2
            },
            {
                price: 10000,
                title: 'washing machine',
                qty: 0,
                img: '',
                id:3
            },

           ]
         
        }    
      }

      handleincreseQuabtity=(product)=>{
        // console.log("increase quantity of this product",product)
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].qty+=1;

        this.setState({
            products:products
        })
      }

      handledecreseQuabtity=(product)=>{
        // console.log("increase quantity of this product",product)
        const {products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty===0){
            return;
        }
        products[index].qty-=1;

        this.setState({
            products:products
        })
      }

      handeldeleteproduct=(id)=>{
        const {products}=this.state;
        console.log(id)
        const item=products.filter((product)=>product.id !== id)
        console.log(item)

        this.setState({
            products:item
        })
      }

    render(){
        const {products}=this.state;
        return(
<>   
        {products.map((product,index)=>(<CartItem product={product}
         onincresequantity={this.handleincreseQuabtity}
         ondecresequantity={this.handledecreseQuabtity}
         ondeleteproduct={this.handeldeleteproduct}
          key={index}/>))}
        </>
        )
        
    }
}

export default Cart;