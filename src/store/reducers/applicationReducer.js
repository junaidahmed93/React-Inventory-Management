const initial_state ={};

export function applicationReducer(state= initial_state, action){
    switch(action.type){
        case "LOGIN":
        console.log(action.data);
        return state;

        default :
        return state;
    }
}