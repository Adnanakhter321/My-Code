export const CheckUser = (user,uid) => {
    return {
        type: 'CHECK_USER',
        payload: {
            // id: new Date().getTime().toString(),
            data: user,uid
        }
    }
}
