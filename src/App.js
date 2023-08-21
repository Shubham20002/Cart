import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import {db} from "./firebase";
import { collection, addDoc,getDocs,onSnapshot,deleteDoc,doc,updateDoc} from "firebase/firestore"; 




class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [] 
    }
  }

  handleincreseQuabtity = async(product) => {
    // console.log("increase quantity of this product",product)
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;

    // this.setState({
    //   products: products
    // })
    const washingtonRef = doc(db, "Products", products[index].id);

await updateDoc(washingtonRef, {
  qty:products[index].qty+1
});
  }

  handledecreseQuabtity = async(product) => {
    // console.log("increase quantity of this product",product)
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    // products[index].qty -= 1;

    // this.setState({
    //   products: products
    // })
    const washingtonRef = doc(db, "Products", products[index].id);

    await updateDoc(washingtonRef, {
      qty:products[index].qty-1
    });

  }

  //function to delete product
  handeldeleteproduct =async (id) => {
    // const { products } = this.state;
   
    // const item = products.filter((product) => product.id !== id)
    // console.log(item)

    await deleteDoc(doc(db, "Products",
    id));

    // this.setState({
    //   products: item
    // })
  }

  //function to count total qty of product
  getcount = () => {
    const { products } = this.state;
    var count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  //function to calculate total amount
  Totalprice=()=>{
    const { products } = this.state;
    var total = 0;
    products.forEach((product) => {
      total =total+ product.qty*product.price;
    })
    return total;
  }
 
  //testing to adding doc to firestore
   addmobile= async (e)=>{
   e.preventDefault();
   
   // Add a new document with a generated id.
   const docRef = await addDoc(collection(db, "Products"), {
    price: 999,
    title: 'Mobile Phone',
    qty: 0,
    img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',

});
// console.log("Document written with ID: ", docRef.id);
 }

 addlaptop= async (e)=>{
  e.preventDefault();
  
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "Products"), {
   price: 30000,
   title: 'Laptop',
   qty: 0,
   img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',

});
// console.log("Document written with ID: ", docRef.id);
}

addwashingmachine= async (e)=>{
  e.preventDefault();
  
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "Products"), {
   price: 999,
   title: 'Washing machine',
   qty: 0,
   img: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',

});
// console.log("Document written with ID: ", docRef.id);
}
 async componentDidMount(){
// const querySnapshot = await getDocs(collection(db, "Products"));
// console.log(querySnapshot._snapshot)
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   products.push(doc.data())
  
// });

onSnapshot(collection(db,"Products"), (snapshot) => {
  const {products}=this.state;
  const product =snapshot.docs.map(doc => {
   return {id:doc.id,
    ...doc.data()}
  })
 console.log(products)
 this.setState({
  products:product
})
})
 } 
 
  render() {
    const { products } = this.state;

    return (
      <>
        <Navbar count={this.getcount()} />
        <button onClick={this.addmobile}>add mobile</button>
        <button onClick={this.addwashingmachine}>add washing machine</button>
        <button onClick={this.addlaptop}>add laptop</button>
        <Cart product={products}
          onincresequantity={this.handleincreseQuabtity}
          ondecresequantity={this.handledecreseQuabtity}
          ondeleteproduct={this.handeldeleteproduct} />
          <div style={{padding:10,fontSize:20}}>Total:{this.Totalprice()}</div>
      </>
    )
  }
}

//in this project we only storing product in firebase db and getting product and render on client side 
// other delete opration are performing on local.(this.state)


export default App;
