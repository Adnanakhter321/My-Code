const initialState = {
    user:[],
    AllRestaurants : [],
    Dishes : [],
    Cart:[]
}


const todoReducer = (state = initialState , action) => {
        switch(action.type) {
            case "CHECK_USER":
                const{ data, uid } = action.payload;
                return {
                    ...state,
                    user:[data,uid]
                }
            case "ADD_RESTAURANTS":
                const {data2} = action.payload
                return {
                    ...state,
                    AllRestaurants:[
                        ...state.AllRestaurants ,
                        data2
                    ]
                }
            case "ADD_DISHES":
                const {data3} = action.payload
                return {
                    ...state,
                    Dishes:[
                        ...state.Dishes ,
                        data3
                    ]
                }
                case "ADD_ITEM":
                    const {cartData} = action.payload
                    return {
                        ...state,
                        Cart:[
                            ...state.Cart ,
                            cartData
                        ]
                    }
                case "CART_NULL":
                    return {
                        ...state,
                        Cart:[]
                    }
                case "CART_DELETE_SELECTED":
                    let {uid33} = action.payload
                    const Cart = state.Cart.filter(Cart22 => uid33 !== Cart22.uid )
                    return {
                        ...state,
                        Cart:Cart
                    }
                case "UPDATE_CART":
                    let {uid34 } = action.payload
                    const UpdatedCart = []
                    state.Cart.map((el)=>{
                        if(el.uid === uid34){
                            el.quantity =  el.quantity + 1 
                            UpdatedCart.push(el)
                        }
                        else{
                            UpdatedCart.push(el)
                        }
                        return null
                    })
                    return {
                        ...state,
                        Cart:UpdatedCart
                    }
                case "UPDATE_CART_MINIZE":
                    let {uid35 } = action.payload
                    const UpdatedCart2 = []
                    state.Cart.map((el)=>{
                        if(el.uid === uid35){
                            el.quantity =  el.quantity - 1 
                            UpdatedCart2.push(el)
                        }
                        else{
                            UpdatedCart2.push(el)
                        }
                        return null
                    })
                    return {
                        ...state,
                        Cart:UpdatedCart2
                    }
            default : return state;
        }
}

export default todoReducer;