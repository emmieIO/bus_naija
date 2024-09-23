import { Link } from 'react-router-dom';
import AuthLayout from './../../shared/AuthLayout';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';


const ForgotPassword = () => {
  const [email, setEmail] = useState(null);
  const { forgotPassword } = useAuth();

  const handleForgotPassword = async (e)=>{
    e.preventDefault();
    const res = await forgotPassword({email})
    if(res.error){
      toast.error(res.payload.message,{
        id:"forgot-password-error"
      })
  }
  if(res.payload.success){
  toast.success(res.payload.message, {
    id: "forgot-password-success"
  })

  }

  }
  return (
    <AuthLayout>
      <h1 className='text-2xl font-medium text-gray-900 text-center'>Password Reset</h1>
      <p className='text-gray-500  text-center'>Enter a valid email address to reset your password</p>
      <form className='mt-4' onSubmit={handleForgotPassword}>
        <div>
          <label htmlFor='email' className='block text-sm text-gray-600'>Email</label>
          <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id='email'
          className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
        </div>
        <div className='mt-4'>
          <button
          type='submit'
          className='w-full bg-green-600 text-white p-2 rounded-md flex items-center justify-center gap-2'>
            Reset Password</button>
        </div>
        <div className='mt-4'>
          <p className='text-center'>Remembered your password? <Link to='/login' className='text-green-600'>Login</Link></p>
        </div>
      </form>
    </AuthLayout>
  )
}

export default ForgotPassword