import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'
import { useGetUserQuery } from "../features/auth/authApi"
import { useDispatch } from "react-redux"
import { setCredentials } from "../features/auth/authSlice"
import { useEffect } from "react"


const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data: user, error, isSuccess } = useGetUserQuery();

    if (!error) {
        navigate('/login',{replace:true});
    }
    
    useEffect(()=>{
        if(user){
            dispatch(setCredentials({user}));
        }
    },[dispatch, user])
    return (

        <div>
            
            {children}
        </div>
    )
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProtectedRoute