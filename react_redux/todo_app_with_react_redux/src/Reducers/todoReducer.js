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





            default : return state;
        }
}

export default AddSub
