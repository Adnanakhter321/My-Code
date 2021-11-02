export const Add = (data) =>{
    return {
        type:'ADD_ALL',
        payload:{
            id:new Date().getTime().toString(),
            data:data,
        }
    }
}
export const Delete = () =>{
    return {
        type:'DELETE_EACH'
    }
}
export const DeleteAll = () =>{
    return {
        type:'DELETE_ALL'
    }
}