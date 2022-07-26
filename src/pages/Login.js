import { Link } from "react-router-dom"


const Login = () =>{
    return(
        <>
            <div className="login_container">
                <form action="" className="login_form">
                    <h4 style={{textAlign:'center', color: 'white', marginBottom: '2rem'}}>Food's Restaurant</h4>

                    <div className="input_field">
                        <span>Username</span>
                        <input type="text" required/>
                    </div>
                    <div className="input_field">
                        <span>Password</span>
                        <input type="text" required/>
                    </div><br />
                    <Link to="/"><button>Login</button></Link>
                </form>
            </div>
        </>
    )
}

export default Login 