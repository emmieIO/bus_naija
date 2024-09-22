import { Link, useSearchParams } from "react-router-dom"
import AuthLayout from "../../shared/AuthLayout"
import useAuth from "../../hooks/useAuth"
import toast from "react-hot-toast"
import { useState } from "react"


const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')
    const { resetPassword } = useAuth()

    const handleResetPassword = async (e) => {
        e.preventDefault()
        const res = await resetPassword({ newPassword, passwordConfirmation, resetToken: token })
        if (res.error) {
            toast.error(res.payload.message, {
                id: "reset-password-error"
            })
        }
        if (res.payload.success) {
            toast.success(res.payload.message, {
                id: "reset-password-success"
            })
        }
    }

    return (
        <AuthLayout>
            <h1 className='text-2xl font-medium text-gray-900 text-center'>Password Reset</h1>
            <p className='text-gray-500  text-center'>Enter a valid email address to reset your password</p>
            <form className='mt-4 space-y-3' onSubmit={handleResetPassword}>
                <div>
                    <label htmlFor='email' className='block text-sm text-gray-600'>New Password</label>
                    <input type='password'
                        onChange={(e) => setNewPassword(e.target.value)}
                        id='newPassword' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
                </div>
                <div>
                    <label htmlFor='email' className='block text-sm text-gray-600'>Confirm Password</label>
                    <input
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        type='password' id='newPasswordConfirm' className='w-full mt-1 p-2 border border-gray-300 rounded-md' />
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

export default ResetPassword