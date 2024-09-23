
import { useSelector } from 'react-redux'

const Error = ({field}) => {
    const error = useSelector(state=>state.auth.error)
    if(!error) return undefined;
    if(error!=null && Array.isArray(error.errors)){
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