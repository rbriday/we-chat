import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    userInfo: (state, action) => {
        console.log(state);
        console.log(action);
        
    },
    
  }
})

// Action creators are generated for each case reducer function
export const { userInfo } = userSlice.actions

export default userSlice.reducer