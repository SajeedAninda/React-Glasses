import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

let SocialLogin = () => {
    let { googleLogin } = useContext(AuthContext);

    let handleGoogle = () => {
        googleLogin()
            .then((result) => {
                let user = result.user;
                console.log(user);
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