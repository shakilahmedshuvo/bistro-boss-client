import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

// handleLogin
const Login = () => {
    const { signIn } = useContext(AuthContext);
    // redirect the user
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // handle login function
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        // login page sign in function
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    }

    // captcha
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const [disabled, setDisabled] = useState(true);
    const handleValidateCaptcha = (event) => {
        const user_captcha_value = event.target.value;
        // console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen font-bold bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">
                            Login now!
                        </h1>
                        <p className="py-6">
                            Provident cuspidate voluptatem et in. Quadrat fugit ut assumed excepting exercitation quasi. In delegati eacute aut repudiate et a id nisi.
                        </p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form
                            onSubmit={handleLogin}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Email
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Password
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Your Password" className="input input-bordered" />
                                <label className="label">
                                    <a className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            {/* type captcha */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input
                                    onBlur={handleValidateCaptcha}
                                    type="text"
                                    name="captcha"
                                    placeholder="Type The Text Above" className="input input-bordered" />
                            </div>
                            {/* submit btn */}
                            <div className="form-control mt-6">
                                <input
                                    // TODO: make btn disable for captcha
                                    // disabled={disabled}
                                    disabled={false}
                                    className="btn btn-primary"
                                    type="submit"
                                    value="Login"
                                />
                            </div>
                        </form>
                        <p>
                            <small>
                                New Here? <Link
                                    to="/signUp">
                                    Create an Account
                                </Link>
                            </small>
                        </p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;