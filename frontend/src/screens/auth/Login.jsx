import AuthLayout from '../../shared/AuthLayout'


const Login = () => {
  return (
    <AuthLayout>
    <div className='lg:w-2/3 w-full'>
        <h1 className='text-2xl font-medium text-gray-900'>Welcome Back!🖐🏾</h1>
        <p className='text-gray-500'>Login to your account</p>
        <form className='mt-4'>
            <div>
                <label htmlFor='email' className='block text-sm text-gray-600'>Email</label>
                <input type='email' id='email' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
            </div>
            <div className='mt-4'>
                <label htmlFor='password' className='block text-sm text-gray-600'>Password</label>
                <input type='password' id='password' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
            </div>
            <div className='mt-4'>
                <button type='submit' className='w-full bg-gray-900 text-white p-2 rounded-md'>Login</button>
            </div>
        </form>
    </div>
    </AuthLayout>
  )
}

export default Login