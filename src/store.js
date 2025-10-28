import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './components/firebase/Slices/userSlice'

export const store = configureStore({
  reducer: {
    userInfo: userSlice
  },
})