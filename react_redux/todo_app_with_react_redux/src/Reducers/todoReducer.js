const initialState = {
    list:[]
}


const AddSub = (state = initialState , action) => {
        switch(action.type) {
            case "ADD_ALL":
                const{id, data} = action.payload;
                return {
                    ...state,
                    list:[
                        ...state.list,
                            {
                                id :id,
                                data:data,
                            }
                    ]
                }
            case "DELETE_EACH":
                 const updateList = state.list.filter((elem) => {
                     return elem.id !== action.id
                 })
                return {
                    ...state,
                    list:updateList
                }
            case "DELETE_ALL":
                return {
                    ...state,
                    list:[]
                }
            default : return state;
        }
}

export default AddSub
