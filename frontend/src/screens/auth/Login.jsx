import { Link } from 'react-router-dom';
import AuthLayout from '../../shared/AuthLayout';
import { useState} from 'react';
import Error from '../../components/Error';
import useAuth from '../../hooks/useAuth';
import { Spinner } from '@material-tailwind/react';
import toast from 'react-hot-toast';






const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, loading } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await login({ email, password })
            if (result.error && !Array.isArray(result.payload.errors)) {
                toast.error(result.payload.message, {
                    id: 'login-error'
                })
            }
            if (result.payload.success) {
                toast.success(result.payload.message, {
                    id: 'login-success'
                })
            }
        } catch (error) {
            console.log(error);

        }

    }
    return (
        <AuthLayout>
                <h1 className='text-2xl font-medium text-gray-900 text-center'>Welcome Back!</h1>
                <p className='text-gray-500  text-center'>Login to your account</p>
                <form className='mt-4'>
                    <div>
                        <label htmlFor='email' className='block text-sm text-gray-600'>Email</label>
                        <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} id='email' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        <Error field={'email'} />
                    </div>
                    <div>
                        <div className='mt-4'>
                            <p className='text-right'><Link to='/forgot-password' className='text-green-600'>Forgot Password</Link></p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <label htmlFor='password' className='block text-sm text-gray-600'>Password</label>
                        <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} id='password' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        <Error field={'password'} />
                    </div>
                    <div className='mt-4'>
                        <button type='button' disabled={loading} onClick={handleSubmit} className='w-full bg-green-600 disabled:bg-green-300 text-white p-2 rounded-md flex items-center justify-center gap-2'>
                        {loading && <Spinner />}Sign in</button>
                    </div>
                    <div className='mt-4'>
                        <p className='text-center'>Don&apos;t have an account? <Link to='/register' className='text-green-600'>Sign up</Link></p>
                    </div>
                </form>
        </AuthLayout>
    )
}

export default Login