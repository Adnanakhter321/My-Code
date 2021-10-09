
export let data = {
    authUser:{},
    tweets:[],
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
        case "ADD_TWEET":{
            let usersClone = state.tweets.slice(0);
            usersClone.push(action.payload);
            return{
                ...state,
                tweets:usersClone
            }
        }
        default:
            return state;

    }
}