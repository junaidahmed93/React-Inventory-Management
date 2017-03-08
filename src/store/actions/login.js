import * as firebaseConfig from '../../config/config';

export function loginRequest(credentials){
    return dispatch=>{
        console.log("1");
       

        firebaseConfig.firebaseAuth.createUserWithEmailAndPassword(credentials.email,credentials.password)
        .then((data)=>{
            dispatch({type: 'LOGIN' , data: data.uid})
            console.log("2",data);
        })

    }
}