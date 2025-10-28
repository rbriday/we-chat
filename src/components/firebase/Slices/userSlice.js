import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")): null ,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    userInfo: (state, action) => {
        console.log(state.value);
        console.log(action.payload);
        state.value = action.payload
        
    },
    
  }
})

// Action creators are generated for each case reducer function
export const { userInfo } = userSlice.actions

export default userSlice.reducer