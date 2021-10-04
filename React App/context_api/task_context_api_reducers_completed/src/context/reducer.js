
export let data = {
    snacks: 'Rio',
    drink: 'Coffee',
    authUser:{},
    allStudents:[],
    users: [
        { 
            userName: 'Adnan',
            email: 'a@gmail.com',
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
            email: 'a2@gmail.com',
            password: '123',
            role: 'Student'
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
        case "LOGOUT_USER":{
            return{
                ...state,
                authUser: {},
            }
        }
        case "ADD_STUDENT":{
            let UserClone=state.allStudents.slice(0);
            UserClone.push(action.payload);
            return{
                ...state,
                allStudents: UserClone,
            }
        }
        default:
            return state;

    }
}