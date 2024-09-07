import AuthLayout from "../../shared/AuthLayout";
import { Link } from 'react-router-dom';

AuthLayout

const Register = () => {
    return (
        <AuthLayout>
            <div className='lg:w-2/3 w-11/12'>
                <h1 className='text-2xl font-medium text-gray-900 md:text-left text-center'>Create new account</h1>
                <p className='text-gray-500 md:text-left text-center'>Signup for an account with busnaija</p>
                <form className='mt-4'>
                    <div className="flex gap-2 items-center">
                        <div className="mt-4">
                        <label htmlFor='email' className='block text-sm text-gray-600'>Firstname</label>
                        <input type='email' id='email' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        </div>
                        <div className="mt-4">
                        <label htmlFor='email' className='block text-sm text-gray-600'>Lastname</label>
                        <input type='email' id='email' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='email' className='block text-sm text-gray-600'>Email</label>
                        <input type='email' id='email' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="mt-4">
                        <label htmlFor='email' className='block text-sm text-gray-600'>Phone</label>
                        <input type='email' id='email' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        </div>
                        <div className="mt-4">
                        <label htmlFor='email' className='block text-sm text-gray-600'>Address</label>
                        <input type='email' id='email' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <label htmlFor='password' className='block text-sm text-gray-600'>Password</label>
                        <input type='password' id='password' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                    </div>
                    <div className='mt-4'>
                        <button type='submit' className='w-full bg-gray-900 text-white p-2 rounded-md'>Sign up</button>
                    </div>
                    <div className='mt-4'>
                        <p className='text-center'>have an account already ? <Link to='/login' className='text-blue-500'>Sign in</Link></p>
                    </div>
                </form>
            </div>
        </AuthLayout>
    )
}

export default Register