import {ADD_COMMENT} from "../type/FacebookType"

const initialState = {
    arrComment: [
        // { name: 'Sĩ', content: 'Ahihi', image: 'https://picsum.photos/id/1/1000/1000' },
        // { name: 'Tuân', content: 'Hello', image: 'https://picsum.photos/id/2/1000/1000' }
    ]
}

export const FacebookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT : {
            state.arrComment = [...state.arrComment, action.userComment];
            return {...state};
        }

        default:
            return state
    }
}
