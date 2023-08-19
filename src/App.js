import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 0,
          img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          id: 1
        },
        {
          price: 1999,
          title: 'Laptop',
          qty: 0,
          img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          id: 2
        },
        {
          price: 10000,
          title: 'washing machine',
          qty: 0,
          img: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          id: 3
        },
      ]
    }
  }

  handleincreseQuabtity = (product) => {
    // console.log("increase quantity of this product",product)
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products: products
    })
  }

  handledecreseQuabtity = (product) => {
    // console.log("increase quantity of this product",product)
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({
      products: products
    })
  }

  handeldeleteproduct = (id) => {
    const { products } = this.state;
    console.log(id)
    const item = products.filter((product) => product.id !== id)
    console.log(item)

    this.setState({
      products: item
    })
  }

  getcount = () => {
    const { products } = this.state;
    var count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  Totalprice=()=>{
    const { products } = this.state;
    var total = 0;

    products.forEach((product) => {
      total =total+ product.qty*product.price;
    })

    return total;

  }

  render() {
    const { products } = this.state;

    return (
      <>
        <Navbar count={this.getcount()} />
        <Cart product={products}
          onincresequantity={this.handleincreseQuabtity}
          ondecresequantity={this.handledecreseQuabtity}
          ondeleteproduct={this.handeldeleteproduct} />
          <div style={{padding:10,fontSize:20}}>Total:{this.Totalprice()}</div>
      </>
    )
  }
}



export default App;
