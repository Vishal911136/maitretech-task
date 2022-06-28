import { useEffect } from "react";
import { BsFillCartCheckFill  } from "react-icons/bs";
import { ImSpoonKnife } from 'react-icons/im'
import { NavLink } from "react-router-dom";


// import { NavLink} from 'react-router-dom'

const Header = ({cartItems}) =>{
    useEffect(() =>{
        console.log(cartItems)
    },[])

    return(
        <>
           <header className="header_container">
                <div className="logo">
                    <NavLink to="/"><ImSpoonKnife/></NavLink>
                    <NavLink to="/"> Food's Restaurant</NavLink>
                </div>
                <div className="cart_png">
                    <NavLink to="/checkout"><BsFillCartCheckFill style={{color: 'white',fontSize: '24px'}}/> </NavLink>
                    <span>3</span>
                </div>
           </header>
        </>
    )
}

export default Header