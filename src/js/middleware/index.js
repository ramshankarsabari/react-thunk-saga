import { ADD_ARTICLE } from "../constants/index";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({dispatch}){
    return function(next){
        return function(action){
            if(action.type === ADD_ARTICLE){
                const foundWords = forbiddenWords.filter(word => action.payload.title.includes(word));
                if (foundWords.length) {
                    return dispatch({ type: "FOUND_BAD_WORD" });
                  }
            }
            return next(action);
        }
    }
}