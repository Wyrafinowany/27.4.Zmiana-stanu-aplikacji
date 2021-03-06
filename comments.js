import {
    ADD_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
    THUMB_UP_COMMENT,
    THUMB_DOWN_COMMENT
} from './actions';

const initialState = {
    comments: [],
    users: []
};

function comments(state = [], action) {
    switch (action.type) {
        
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }, ...state.comments];
        
        case EDIT_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                    return{...comment, text: action.id}
                }
                return comment;
            });

        case DELETE_COMMENT:
            return state.filter(comment => comment.id !== action.id);
        
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                    return {...comment, votes: comment.votes + 1}
                }
                return comment;
            });

        case THUMB_DOWN_COMMENT:
            return state.map(comment =>{
                if(comment.id === action.id) {
                    return {...comment, votes: comment.votes - 1}
                }
                return comment;
            }); 

        default:
            return state
    }
}

export default comments;