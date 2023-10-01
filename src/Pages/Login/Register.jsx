import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    let { register } = useContext(AuthContext);

    let handleRegister = (e) => {
        e.preventDefault();
        let fullName = e.target.fullName.value;
        let email = e.target.email.value;
        let image = e.target.imgURL.value;
        let password = e.target.password.value;
        if (password.length < 6) {
            toast.error("Password should have more than 6 Characters");
            return;
        }

        register(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error.message);
            });

    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="Full name" name='fullName' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text" placeholder="image url" name='imgURL' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6 p-0">
                                    <button type='submit' className="btn btn-neutral">Register</button>
                                </div>
                                <label className="label">
                                    Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                                </label>
                                <SocialLogin />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;