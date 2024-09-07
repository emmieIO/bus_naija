import { Link } from 'react-router-dom';
import AuthLayout from '../../shared/AuthLayout';



const Login = () => {
  return (
    <AuthLayout>
    <div className='lg:w-2/3 w-11/12'>
        <h1 className='text-2xl font-medium text-gray-900 md:text-left text-center'>Welcome Back!</h1>
        <p className='text-gray-500 md:text-left text-center'>Login to your account</p>
        <form className='mt-4'>
            <div>
                <label htmlFor='email' className='block text-sm text-gray-600'>Email</label>
                <input type='email' id='email' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
            </div>
            <div>
            <div className='mt-4'>
                <p className='text-right'><Link to='/register' className='text-blue-500'>Forgot Password</Link></p>
            </div>
            </div>
            <div className='mt-4'>
                <label htmlFor='password' className='block text-sm text-gray-600'>Password</label>
                <input type='password' id='password' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
            </div>
            <div className='mt-4'>
                <button type='submit' className='w-full bg-gray-900 text-white p-2 rounded-md'>Sign in</button>
            </div>
            <div className='mt-4'>
                <p className='text-center'>Don&apos;t have an account? <Link to='/register' className='text-blue-500'>Sign up</Link></p>
            </div>
        </form>
    </div>
    </AuthLayout>
  )
}

export default Login