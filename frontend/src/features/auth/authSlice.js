import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    error: null,
    isAuth:false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user, error } = action.payload;
            if (error) {
                state.error = error.data;
            } else if (user) {
                state.user = user;
                state.isAuth = true
                state.error = null;
            }
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('access_token');
        },
    }
})

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
