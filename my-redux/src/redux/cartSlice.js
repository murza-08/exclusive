import { createSlice } from '@reduxjs/toolkit'


const cartSlise = createSlice({
    name: 'flower',
    initialState: {
        cartitem: []
    },
    reducers: {
        addCart: ( state, action) => {
            const findFlower = state.cartitem.find( ( el ) => el.id == action.payload.ad )
            if( !findFlower ) {
                state.cartitem.push( action.payload )
            }
        }
    }
})

export const { addCart } = cartSlise.actions
export default cartSlise.reducer

