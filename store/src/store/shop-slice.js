import {createSlice} from '@reduxjs/toolkit';
import { getAllItems, getAllCategories } from './async-actions';

const initialState = {
    category: null,
    items: [],
    isLoading: false,
    cart: [],
    error: null,
    categories: [],
};

const shopSlice = createSlice({
    name: "shop",
    initialState,//что хранится 
    reducers: {
        setItems: (state, {payload}) => { // что делать
            state.items = payload;
        },
        setCategory: (state, {payload}) => {
            state.categories = payload;
        },
        setIsLoading: (state, {payload}) => {
            state.isLoading = payload;
        }                                  //
    },
    
    //getAllItems
    extraReducers: (builder) => {
        builder.addCase(getAllItems.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getAllItems.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.items = payload;
        })
        builder.addCase(getAllItems.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })


        //getAllCategories
        builder.addCase(getAllCategories.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getAllCategories.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.categories = payload;
        })
        builder.addCase(getAllCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

    }
});


export const {setItems, setCategory, setIsLoading} = shopSlice.actions;

export default shopSlice.reducer;