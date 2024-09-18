import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authAPI from "./authApi";

const initialState = {
    user: null,
    token: localStorage.getItem('token') ? localStorage.getItem("token") : null,
    isAuthenticated: false,
    loading: false,
    error: null,
    authChecked: false,
}

// AsyncThunk
export const login = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
    try {
        const { email, password } = data;
        const res = await authAPI.post("auth/login", { email, password });
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});

export const register = createAsyncThunk('auth/register', async (data, { rejectWithValue }) => {
    try {
        const res = await authAPI.post("auth/register", data);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const verifyEmail = createAsyncThunk('auth/verifyEmail', async(data, {rejectWithValue})=>{
    try {
        const res = await authAPI.post("auth/verify-email", data,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const resendCode = createAsyncThunk('auth/resendVerificationCode', async (data, {rejectWithValue})=>{
    try {
        const res = await authAPI.post("auth/resend-verification-code", data,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const checkAuthStatus = createAsyncThunk('auth/checkAuthStatus', async (_, { rejectWithValue })=>{
    try {
        const res = await authAPI.get("auth/me",{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


// End AsyncThunk

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearErrors: (state) => {
            state.error = null;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false,
            localStorage.removeItem('token')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                const {token, user} = action.payload;
                state.loading = false;
                state.user = user;
                state.token = token
                state.isAuthenticated = true;
                JSON.stringify(localStorage.setItem("token", token));
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(register.pending, (state, action) => {
                state.loading = true;
                state.error = action.payload;
            })
            .addCase(register.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(checkAuthStatus.pending, (state) => {
                state.loading = true;
            })
            .addCase(checkAuthStatus.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.user = action.payload;
                    state.isAuthenticated = true;
                }
                state.authChecked = true;
            })
            .addCase(checkAuthStatus.rejected, (state) => {
                state.loading = false;
                state.user = null;
                state.isAuthenticated = false;
                state.authChecked = true;
            });
    }
})

export const { clearErrors, logout } = authSlice.actions;
export default authSlice.reducer;
