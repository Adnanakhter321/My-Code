const initialState = {
    list:[],
    user:[],
}


const todoReducer = (state = initialState , action) => {
        switch(action.type) {
            case "CHECK_USER":
                const{ data, uid } = action.payload;
                return {
                    ...state,
                    user:[data,uid]
                }
            default : return state;
        }
}

export default todoReducer;
