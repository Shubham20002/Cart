import React from "react";

class Navbar extends React.Component{

    render(){
        const navlist=["Home","About","Contact"];
        return(
            <>
            <ul style={style.ul}>
            {navlist.map((item)=>(<li style={style.li}>{item}</li>))}
            </ul>
            </>
        )
    }
}

const style={
    ul:{
      
    },
    li:{
        color:"red",
        listStyle:"none",
        display:"inline-block",
        marginLeft:10
    }
}

export default Navbar;