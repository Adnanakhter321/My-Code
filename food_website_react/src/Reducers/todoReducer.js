const initialState = {
    user:[],
    AllRestaurants : []
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
            default : return state;
        }
}

export default todoReducer;
