export const Add = (data) => {
    return {
        type: 'ADD_ALL',
        payload: {
            id: new Date().getTime().toString(),
            data: data,
        }
    }
}
export const Delete = (id) => {
    return {
        type: 'DELETE_EACH', id
    }
}
export const DeleteAll = () => {
    return {
        type: 'DELETE_ALL'
    }
}