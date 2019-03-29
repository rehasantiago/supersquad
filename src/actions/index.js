export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";

export function addCharacterById(id){
    const action = {
        type:ADD_CHARACTER,
        id//in es6 id:id is similar to id
    }
    return action;
}

export function removeCharacterById(id){
    const action ={
        type:REMOVE_CHARACTER,
        id
    }
    return action;
}
