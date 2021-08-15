import {ADD_COMMENT} from '../type/FacebookType'

export const AddCommentAction = (userComment) => {
    return {
        type: ADD_COMMENT,
        userComment: { ...userComment, image: `https://i.pravatar.cc/50/u=${userComment.name}` }
    }
}
