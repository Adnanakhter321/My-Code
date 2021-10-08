
export let data = {
    authUser:{},
}



export function reducer(state, action) {
    switch (action.type) {
        case "USER_LOGIN":{
            state.authUser = action.payload
            return{
                ...state,
                authUser: state.authUser,
            }
        }
        default:
            return state;

    }
}