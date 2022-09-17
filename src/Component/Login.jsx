import React from 'react';
import {Link,  useLocation, useNavigate} from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";

import { useForm } from 'react-hook-form';
import auth from '../firebase.init';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) =>{
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  }
   
  if (loading) {
    return <p>Loading......</p>;
  }
  if (user || gUser) {
    console.log(user);
    navigate(from, { replace: true });
  }
  if (error) {
    console.log(error);
  }
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-500 '>
            <div className='px-16 py-6 mt-4 text-left bg-white shadow-lg rounded-3xl'>
            <h3 class="text-2xl font-bold text-center">Login to your account</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mt-4">
                
                    <label class="block" for="email">Email</label>
                            <input type="text" placeholder="Email"
                                class="w-80 px-4 py-2 mt-2 border drop-shadow-md rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                {...register("email", { required: true })}
                                />
               
                <div class="mt-4">
                    <label class="block">Password</label>
                            <input type="password" placeholder="Password"
                                class="w-80 px-4 py-2 mt-2 border drop-shadow-md rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                {...register("password", { required: true })}
                                />
        
                </div>
                <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
                <div class="flex items-baseline justify-between">
                    <button type='submit' value='login' class="btn px-6 py-2 mt-4 text-white bg-teal-600 rounded-lg hover:bg-teal-700">Login</button>
                    <Link to={"/register"} class="text-sm font-bold text-green-600 hover:underline">Create a account</Link>
                </div>
            </div>
                </form>
            </div>
        </div>
    );
};

export default Login;