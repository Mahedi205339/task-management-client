import { FcGoogle } from "react-icons/fc";

import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
const SocialLogin = () => {
    const { googleSignIn } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate =useNavigate()
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/')
                    })
            })
    }
    return (
        <div>
            <div>
                <div className="divider"></div>
                <button onClick={handleGoogleSignIn} className="btn border border-cyan-600 text-cyan-600 my-4 btn-outline w-full">
                    <FcGoogle></FcGoogle>
                    Google
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;

