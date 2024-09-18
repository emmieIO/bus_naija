import { useState } from 'react'
import VerifyLayout from './../../shared/VerifyLayout';
import useAuth from '../../hooks/useAuth'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const VerifyAccount = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""))
    const [isComplete, setIsComplete] = useState(false)
    const {user, verifyEmail, resendCode} =useAuth()
    const navigate = useNavigate()

    const handleChange = (e, id) => {
        // Checks if input is a number
        if(isNaN(e.value)) return

        // set otp state
        const newOtp = [...otp]
        newOtp[id] = e.value
        setOtp(newOtp)

        // focus next input
        if(e.nextSibling && e.value !== "") {
            e.nextSibling.focus();
        }

        // focus previous input
        if(e.previousSibling && e.value === "") {
            e.previousSibling.focus();
        }

        // check if otp is complete
        if(newOtp.every((data)=>data !== "")){
            setIsComplete(true)
        }else{
            setIsComplete(false)
        }


    }

    const handleKeyDown = (e)=>{
        if (e.key === 'Backspace' && !e.target.value && e.target.previousSibling) {
            e.target.previousSibling.focus();
        }
        if(e.key === 'ArrowLeft' && e.target.previousSibling){
            e.preventDefault()
            e.target.previousSibling.focus()
        }
        if(e.key === 'ArrowRight' && e.target.nextSibling){
            e.preventDefault()
            e.target.nextSibling.focus()
        }
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const code = otp.join('')
        const data = {email:user.email,code}
        const res = await verifyEmail(data)
        if(res.error){
            toast.error(res.payload.message)
        }
        if(res.payload.success){
        toast.success(res.payload.message)
        navigate('/dashboard')
        }
    }

    const handleResendCode = async (e)=>{
        e.preventDefault()
        const data = {email:user.email}
        const res = await resendCode(data)
        if(res.error){
            toast.error(res.payload.message)
        }
        if(res.payload.success){
            toast.success(res.payload.message)
        }
    }

    return (
        <VerifyLayout>
            <h1 className='text-2xl font-medium text-gray-900 text-center'>Account Verification!</h1>
            <p className='text-gray-500 text-sm  text-center'>Enter the 6-digit verification code sent to your mail</p>
            <form className='mt-4'>
                <div className="grid grid-cols-6 gap-3">
                    {otp.map((data, id)=>{
                        return(
                            <input
                                type='text'
                                name='otp'
                                maxLength='1'
                                key={id}
                                className='border-green-600 focus:outline-none border-2 text-center p-2 rounded-md'
                                value={data}
                                onChange={(e)=>handleChange(e.target, id)}
                                onFocus={(e)=>e.target.select()}
                                onKeyDown={(e)=>handleKeyDown(e, id)}
                            />
                        )
                    })}
                </div>


                <div className='mt-4'>
                    <button disabled={!isComplete} type='button' onClick={handleSubmit} className='w-full bg-green-600 disabled:bg-green-300 text-white p-2 rounded-md flex items-center justify-center gap-2'>
                        Verify Account</button>
                </div>
                <small className='my-3 block'>Didn&apos;t recieve any otp ?  <button onClick={handleResendCode} className='text-green-600'>Resend Code</button></small>

            </form>
        </VerifyLayout>
    )
}

export default VerifyAccount