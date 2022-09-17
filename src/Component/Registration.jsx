import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../firebase.init';

const Registration = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/dashboard";


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) =>{
    createUserWithEmailAndPassword(data.email, data.displayName, data.password);
  }
    if (loading) {
        return <p>Loading....</p>;
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
        <h3 class="text-2xl font-bold text-center text-emerald-500">Register to your account</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mt-4">
            <div>
                <label class="block" for="text">Your Name</label>
                        <input type="text" placeholder="name"
                         name="displayName"
                            class="w-80 px-4 py-2 mt-2 border drop-shadow-md rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            {...register("displayName", { required: true })}
                            />
            </div>
            <div class="mt-4">
                <label class="block" for="email">Email</label>
                        <input type="text" placeholder="Email"
                            class="w-80 px-4 py-2 mt-2 border drop-shadow-md rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            {...register("email", { required: true })}
                            />
            </div>
            <div class="mt-4">
                <label class="block">Password</label>
                        <input type="password" placeholder="password"
                            class="w-80 px-4 py-2 mt-2 border drop-shadow-md rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            {...register("Password", { required: true })}
                            />
            </div>
            
            <div class="flex items-baseline justify-between">
                <button type='submit' class=" btn px-6 py-2 mt-4 text-white bg-teal-600 rounded-lg hover:bg-teal-700" value='register'>Register</button>
                <Link to={"/login"} class="text-sm font-bold text-green-600 hover:underline">Already have an account</Link>
            </div>
        </div>
            </form>
        </div>
    </div>
    );
};

export default Registration;