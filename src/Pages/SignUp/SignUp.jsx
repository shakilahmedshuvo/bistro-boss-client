import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    // onsubmit
    const onSubmit = data => {
        // console.log(data);

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                // console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {

                        const savedUser = { name: data.name, email: data.email }

                        fetch('http://localhost:5000/users', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                    // logOut();
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    };
    return (
        <>
            <Helmet>
                <title>
                    Bistro Boss | Sign Up
                </title>
            </Helmet>
            <div className="hero min-h-screen font-bold bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">
                            Sign up now !
                        </h1>
                        <p className="py-6">
                            Provident cuspidate voluptatem et in. Quadrat fugit ut assumed excepting exercitation quasi. In delegati eacute aut repudiate et a id nisi.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {/* form start */}
                        <form
                            onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span
                                        className="label-text">
                                        Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    {
                                    ...register("name",
                                        { required: true })
                                    }
                                    name="name"
                                    placeholder="Enter Your Name"
                                    className="input input-bordered" />
                                {
                                    errors.name &&
                                    <span
                                        className="text-red-600">
                                        Name is Required !
                                    </span>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span
                                        className="label-text">
                                        Photo URL
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    {
                                    ...register("photoURL",
                                        { required: true })
                                    } placeholder="Enter Photo URL"
                                    className="input input-bordered" />
                                {
                                    errors.photoURL &&
                                    <span className="text-red-600">
                                        Photo URL is Required !
                                    </span>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Email
                                    </span>
                                </label>
                                <input type="email"
                                    {
                                    ...register("email",
                                        { required: true })
                                    }
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="input input-bordered" />
                                {
                                    errors.email &&
                                    <span className="text-red-600">
                                        Email is Required !
                                    </span>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Password
                                    </span>
                                </label>
                                {/* check the validation */}
                                <input type="password"
                                    {
                                    ...register("password",
                                        {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })
                                    }
                                    placeholder="Enter Your Password"
                                    className="input input-bordered" />
                                {
                                    errors.password?.type === 'required'
                                    &&
                                    <p
                                        className="text-red-600">
                                        Password is Required !
                                    </p>
                                }
                                {
                                    errors.password?.type === 'minLength'
                                    &&
                                    <p
                                        className="text-red-600">
                                        Password Must be 6 Characters !
                                    </p>
                                }
                                {
                                    errors.password?.type === 'maxLength'
                                    &&
                                    <p
                                        className="text-red-600">
                                        Password Must be Less Than 20 Characters !
                                    </p>
                                }
                                {
                                    errors.password?.type === 'pattern'
                                    &&
                                    <p
                                        className="text-red-600">
                                        Password Must Have One Uppercase One Lower Case, One Number & One Special Character !
                                    </p>
                                }
                                <label className="label">
                                    <a
                                        className="label-text-alt link link-hover">
                                        Forgot Password?
                                    </a>
                                </label>
                            </div>
                            {/* submit btn */}
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p>
                            <small>
                                Already Have an Account? <Link to="/login">
                                    Login
                                </Link>
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;