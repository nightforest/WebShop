import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        currentProduct: null
    },
    reducers: {
        setCurrentGame: (state, action) => {
            state.currentProduct = action.payload
        },
    }
});

export const { setCurrentGame } = productsSlice.actions;
export default productsSlice.reducer;