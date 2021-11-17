import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from 'api/userApi'

export const register = createAsyncThunk( 'user/register',
    async (payload) => {
      // call api
        const data = await userApi.register(payload);
      // save data to local storage

      console.log('data from api : ' , data);
        localStorage.setItem('access_token', data.jwt);
        localStorage.setItem('user', JSON.stringify(data.user));
      // return user data
      return data.user;
    }
)

const userSlice = createSlice({
    name : 'user',
    initialState : {
        current: {},
        settings: {},
    },
    reducers : {},
    extraReducers : {
        [register.fulfilled] : (state, action) => {
          // Add user to the state array
          state.current = action.payload;
        }
    },
});

const { reducer } = userSlice;

export default reducer;
