import { createSlice } from '@reduxjs/toolkit';
import { fetchAllItems, fetchAllCategories } from './async-actions';

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
        setItems: (state, { payload }) => { // что делать
            state.items = payload;
        },
        setCategory: (state, { payload }) => {
            state.categories = payload;
        },
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        }                                  //
    },

    //getAllItems
    extraReducers: (builder) => {
        builder.addCase(fetchAllItems.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchAllItems.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.items = payload;
        })
        builder.addCase(fetchAllItems.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })


        //getAllCategories
        builder.addCase(fetchAllCategories.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchAllCategories.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.categories = payload;
        })
        builder.addCase(fetchAllCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

    }
});


export const { setItems, setCategory, setIsLoading } = shopSlice.actions;

export default shopSlice.reducer;