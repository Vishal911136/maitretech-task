import { createContext, useEffect, useState } from "react";
// import { ImPriceTag } from "react-icons/im";


const Menu = ({products,handleAddProduct,cartItems}) =>{
   
   
    const [quantity,setQuantity] = useState(cartItems);
    const plusBtn = (product) =>{
        console.log(cartItems)
    }

    return(
        <>
            <div className="menu_container">

                {
                    products.map((value) => {
                        return(
                            <div className="item" key={value.id}>
                                <img src={value.link} alt="" />
                                <div className="item_disc">
                                    <h1>{value.name}</h1>
                                    <p>Price : {value.price}</p>
                                    <p>Total : {value.quantity}</p>
                                    <p>Cost : {value.price * quantity}</p>
                                    <div className="item_inc_dec_btn">
                                        <button onClick={() => {return(handleAddProduct(value), plusBtn(value))}} style={{background:'#3f51b5',color:'white'}}> + </button>
                                        <button> - </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                 }
            </div>        
        </>
    )
}

export default Menu;
