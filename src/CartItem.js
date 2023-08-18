import React from 'react';
import './CartItem.css';

class CartItem extends React.Component {
 

  increasequantity= () =>{
//form 1 of setstate
    // this.setState({
    //     qty:this.state.qty+1
    // });
    //form 2 of setstate

    this.setState((prevState)=>{
        return {
          qty:prevState.qty+1
         }
    })
  }

  decreasequantity=()=>{

    if(this.state.qty==0){
        return;
    }

    this.setState((prevState)=>{
        return{
            qty:prevState.qty-1
        }
    })
  }
 
  render () {
   
   
    const { price, title, qty,img } = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img className='left-img' src={img} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992651.png" onClick={()=>this.props.onincresequantity(this.props.product)} />
            <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" onClick={()=>this.props.ondecresequantity(this.props.product)}/>
            <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" onClick={()=>this.props.ondeleteproduct(this.props.product.id)}/>
          </div>
        </div>
      </div>
    );
  }
}

// const styles = {
//   image: {
//     height: 110,
//     width: 110,
//     borderRadius: 4,
//     background: '#ccc'
//   }
// }

export default CartItem;