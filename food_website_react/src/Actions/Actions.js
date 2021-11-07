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
