
export let data = {
    authUser:{},
    tweets:[],
    likeData:[],
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
        case "LIKE_DATA":{
            let usersClone = state.likeData.slice(0);
            usersClone.push(action.payload);
            return{
                ...state,
                likeData:usersClone
            }
        }
        case "DELETE_LIKE":{
            let usersClone = state.likeData.splice(0 , state.likeData.length)
            return{
                ...state,
                likeData:usersClone
            }
        }
        default:
            return state;

    }
}