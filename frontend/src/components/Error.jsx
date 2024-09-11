import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux'

const Error = ({field}) => {
    const error = useSelector(state=>state.auth.error)
    
    useEffect(()=>{
        if(error && error.message){
            toast.error(error.message,{ id: 'auth-error-toast', position:"top-right" })
        }
    },[error])
    if(!error) return undefined;
    if(error!=null && Array.isArray(error.errors)){
        console.log(error);
        return error.errors.map((error, index) => {
            if(error.path == field ){
                return <ul key={index}>
                    <li className='text-xs text-red-700'>{error.msg}</li>
                    </ul>
            }
        })
    }
}

export default Error