import { useState } from "react";
import Error from "../../components/Error";
import useAuth from "../../hooks/useAuth";
import AuthLayout from "../../shared/AuthLayout";
import { Link, useNavigate, } from 'react-router-dom';
import { Spinner } from "@material-tailwind/react";




const Register = () => {
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        password: ''
    })
    const { register, loading} = useAuth();
    const navigate = useNavigate();



    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const result =  await register(form)
            if(!result.error){
                navigate('/login')
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <AuthLayout>
            
                <h1 className='text-2xl font-medium text-gray-900 text-center'>Create new account</h1>
                <p className='text-gray-500 text-center'>Signup for an account with busnaija</p>
                <form className='mt-4 space-y-4'>
                    <div className="flex gap-2 items-center">
                        <div className="mt-4">
                            <label htmlFor='firstname' className='block text-sm text-gray-600'>Firstname</label>
                            <input type='text'
                                onChange={(e) => setForm({ ...form, firstname: e.target.value })}
                                value={form.firstname}
                                id='firstname' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                            <Error field={'firstname'} />
                        </div>
                        <div className="mt-4">
                            <label htmlFor='lastname' className='block text-sm text-gray-600'>Lastname</label>
                            <input type='lastname' id='lastname'
                                onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                                value={form.lastname}
                                className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                            <Error field={'lastname'} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='email' className='block text-sm text-gray-600'>Email</label>
                        <input type='email' id='email'
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            value={form.email}
                            className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        <Error field={'email'} />
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="">
                            <label htmlFor='phone' className='block text-sm text-gray-600'>Phone</label>
                            <input type='text' id='phone'
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                value={form.phone}
                                className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                            <Error field={'phone'} />
                        </div>
                        <div className="">
                            <label htmlFor='address'
                                className='block text-sm text-gray-600'>Address</label>
                            <input type='text' id='address'
                                onChange={(e) => setForm({ ...form, address: e.target.value })}
                                value={form.address}
                                className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                            <Error field={'address'} />
                        </div>
                    </div>
                    <div className=''>
                        <label htmlFor='password' className='block text-sm text-gray-600'>Password</label>
                        <input type='password' id='password'
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            value={form.password}
                            className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                        <Error field={'password'} />
                    </div>
                    <div className='mt-4'>
                        <button onClick={handleRegister} disabled={loading} type='submit' className='w-full flex items-center justify-center gap-2 disabled:bg-green-300 bg-green-600 text-white p-2 rounded-md'>{loading && <Spinner />}Sign up</button>
                    </div>
                    <div className='py-10'>
                        <p className='text-center '>have an account already ? <Link to='/login' className='text-green-600'>Sign in</Link></p>
                    </div>
                </form>
        </AuthLayout>
    )
}

export default Register