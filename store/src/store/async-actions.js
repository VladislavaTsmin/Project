import {createAsyncThunk} from '@reduxjs/toolkit';
import { BASE_URL } from "../constants";

export const getAllItems = createAsyncThunk('shop/getAllItems', async (_, thunkApi) => {

    console.log(thunkApi);

    try {
        const rawData = await fetch(`${BASE_URL}/products/all`);
        const data = await rawData.json();
    
        return thunkApi.fulfillWithValue(data);
    } catch (err) {
        return thunkApi.rejectWithValue(err);
     }
   
});

export const getAllCategories = createAsyncThunk("shop/getAllCategories", async (_, thunkApi)=>{
    try {
        const rawData = await fetch(`${BASE_URL}/categories/all`);
        const data = await rawData.json();
    
        return thunkApi.fulfillWithValue(data);
    } catch (err) {
        return thunkApi.rejectWithValue(err);
    }
})
