import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from 'api/userApi'
import StorageKeys from "constants/Storage-keys";

export const register = createAsyncThunk( 'user/register',
    async (payload) => {
      // call api
        const data = await userApi.register(payload);
      // save data to local storage
        localStorage.setItem( StorageKeys.TOKEN, data.jwt);
        localStorage.setItem( StorageKeys.USER, JSON.stringify(data.user));
      // return user data
      return data.user;
    }
);
export const login = createAsyncThunk( 'user/login',
    async (payload) => {
      // call api
        const data = await userApi.login(payload);
      // save data to local storage
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
      // return user data
      return data.user;
    }
);

const userSlice = createSlice({
    name : 'user',
    initialState : {
        current: JSON.parse(localStorage.getItem( StorageKeys.USER )) || {},
        settings: {},
    },
    reducers : {
        logout( state , action ) {
            //clear local storage
            localStorage.removeItem( StorageKeys.TOKEN)
            localStorage.removeItem( StorageKeys.USER)

            // clear state in store
            state.current = {}
        }
    },
    extraReducers : {
        [register.fulfilled] : (state, action) => {
          // Add user to the state array
          state.current = action.payload;
        },
        [login.fulfilled] : (state, action) => {
          // Add user to the state array
          state.current = action.payload;
        },
    },
});

const { actions , reducer } = userSlice;
export const { logout } = actions; 
export default reducer;
