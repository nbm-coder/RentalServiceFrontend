import axios from "axios";
import "../styles/Auth.css"
import {useRef} from "react";
export default function Login(){

  const username=useRef("");
  const password=useRef("");
  const role=useRef("");

  async function handleSubmit(event){
    event.preventDefault();
    try{
      const response=await axios.post("http://localhost/8080/login",{
      username:username.current.value,
      password:password.current.value,
      role:role.current.value
      });
    }
    catch(err){
      console.log(err);
    }
    username.current.value="";
    password.current.value="";
  }

    return (
<section className="vh-100 gradient-custom body-container">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius:"1rem"}}>
          <div className="card-body p-5 text-center">

            <form onSubmit={handleSubmit} className="mb-2 md-5 mt-md-4 pb-2">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <div data-mdb-input-init className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" placeholder="Email: " className="form-control form-control-md" ref={username} required/>
              </div>

              <div data-mdb-input-init className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" placeholder="Password: " className="form-control form-control-md" ref={password} required/>
              </div>

               <select className="form-select mb-4" required ref={role}>
                <option value="" hidden disabled selected>Confirm your role: </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

            </form>

            <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

            <div>
              <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}