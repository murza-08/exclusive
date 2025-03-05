import {createSlise, isAction} from '@reduxjs/toolkit'


const cartSlise = createSlise({
    name: 'flower',
    initialSlise: {
        cartitem: []
    },
    reducers: {
        addCart: ( state, action) => {
            const findFlower = state.cartitem.find( (el) => el.id == action.payload.ad )
            if( !findFlower ) {
                state.cartitem.push( action.payload )
            }
        }
    }
})

export const { addCart } = cartSlise.action
export default cartSlise.reducer
