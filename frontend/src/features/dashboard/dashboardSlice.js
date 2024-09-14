import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sideMenu : false,
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        toggleSideMenu: (state) => {
            state.sideMenu = !state.sideMenu
        }
    }
})

export const { toggleSideMenu } = dashboardSlice.actions
export default dashboardSlice.reducer
