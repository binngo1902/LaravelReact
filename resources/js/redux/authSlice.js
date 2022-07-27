import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import axiosClient from "../api/axiosClient";
import { API_LOGIN } from "../constant/endpoint";

export const login = createAsyncThunk(
    "auth/login",
    async (params, thunkAPI) => {
        try {
            const response = await axiosClient.post(API_LOGIN, params);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
const authSlice = createSlice({
    name: "auth",
    initialState: {
        current: {},
        error: {
            account: "",
            password: "",
            message: "",
        },
    },
    reducers: {},
    extraReducers: {
        [login.rejected]: (state, action) => {
            state.error.account = action?.payload?.errors?.account;
            state.error.password = action?.payload?.errors?.password;
            state.error.message = action?.payload?.message;
            if (action?.payload?.message !== undefined) {
                Swal.fire({
                    icon: "error",
                    text: state.error.message,
                });
            }
        },
        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
            localStorage.setItem("info", JSON.stringify(action.payload));
        },
    },
});

const { reducer: authReducer } = authSlice;
export default authReducer;
