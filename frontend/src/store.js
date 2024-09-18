import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import dashboardReducer  from "./features/dashboard/dashboardSlice";
import { setupAuthAPIInterceptors } from './features/auth/authApi';


const store = configureStore({
    reducer: {
        auth: authReducer,
        dashboard:dashboardReducer
    }
});

setupAuthAPIInterceptors(store);

export default store;