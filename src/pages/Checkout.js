import { useEffect } from "react";



const Checkout = ({cartItems}) =>{
    useEffect(() =>{
        console.log(cartItems[0])
    },[]);
    return(
        <>
        {
            cartItems.map((value)=>{
                return(
                    <div>{value}</div>
                );
            })
        }
            <div className="cart_container">
                <div className="cart_items">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Hamburger_%28black_bg%29.jpg" alt="" />
                    <h5> Burger</h5>
                    <p> 40 rs</p>                    
                </div>
            </div>
        </>
    )
}

export default Checkout