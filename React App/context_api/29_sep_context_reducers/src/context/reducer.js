
export let data = {
    snacks: 'Rio',
    drink: 'Coffee',
    authUser:{},
    users: [
        {
            userName: 'haider',
            email: 'haider@gmail.com',
            password: '123',
            role: 'trainer'
        },
        {
            userName: 'akram',
            email: 'akram@gmail.com',
            password: 'xse3sss555',
            role: 'student'
        },
        {
            userName: 'Samid',
            email: 'samid@gmail.com',
            password: 'xse32sss555',
            role: 'Trainer'
        },
    ]
    
}



export function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_SNACK": {
            return {
                ...state,
                snacks: action.payload
            }
        }
        case "UPDATE_USER": {
            console.log(action.payload);
            let UserClone=state.users.slice(0);
            UserClone.push(action.payload);
            return {
                ...state,
                users: UserClone
            }
        }
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