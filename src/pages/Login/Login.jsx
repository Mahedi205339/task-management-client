
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully Logged in",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    return (
        <div className=" hero min-h-[calc(100vh-100px)] bg-base-200  mx-auto">
            
                <div className="flex-shrink-0 w-full  ">
                    <form onSubmit={handleLogin} className="card-body max-w-[500px] mx-auto">
                        <div>
                            <h2 className='text-center text-2xl md:text-4xl lg:text5xl font-bold text-cyan-600'>Login</h2>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                name="email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                                name="password"
                                className="input input-bordered w-full" required />

                        </div>

                        <div className="form-control">
                            <label className="label">

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="w-full bg-cyan-600 hover:bg-cyan-800 py-2 rounded-lg text-white" type="submit" />


                        </div>
                    </form>
                    <p className='text-center'><small className='text-cyan-600'>New Here? <Link to="/signUp"><span className='font-bold'>Create an Account</span></Link></small></p>
                    <div className='w-64 mx-auto'>
                       <SocialLogin /> 
                    </div>
                    
                </div>
            

        </div>
    );
};

export default Login;