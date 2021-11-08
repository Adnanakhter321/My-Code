export const CheckUser = (user,uid) => {
    return {
        type: 'CHECK_USER',
        payload: {
            // id: new Date().getTime().toString(),
            data: user,uid
        }
    }
}
export const AddRestaurants = (data) => {
    return {
        type: 'ADD_RESTAURANTS',
        payload: {
            data2: data,
        }
    }
}
export const AddDishes = (data) => {
    return {
        type: 'ADD_DISHES',
        payload: {
            data3: data,
        }
    }
}
export const AddItem = (data) => {
    data.quantity = 1;
    return {
        type: 'ADD_ITEM',
        payload: {
            cartData: data,
        }
    }
}
export const CartNull = () => {
    return {
        type: 'CART_NULL',
    }
}
export const cartDeleteSelected = (uid) => {
    return {
        type: 'CART_DELETE_SELECTED',
        payload :{
            uid33: uid,
        }
    }
}
export const UpdateCartSelected = (uid) => {
    return {
        type: 'UPDATE_CART',
        payload :{
            uid34: uid,
        }
    }
}
export const UpdateCartMinize = (uid) => {
    return {
        type: 'UPDATE_CART_MINIZE',
        payload :{
            uid35: uid,
        }
    }
}
