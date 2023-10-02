import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

let SocialLogin = () => {
    let { googleLogin } = useContext(AuthContext);
    let navigate = useNavigate();

    let handleGoogle = () => {
        googleLogin()
            .then((result) => {
                let user = result.user;
                navigate('/');

            }).catch((error) => {
                console.log(error.message)
            });
    }
    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={handleGoogle} className="btn btn-primary btn-circle btn-outline">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;