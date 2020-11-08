//actions.index.js
import {ADD_ARTICLE} from '../constants/index';

export function AddArticle(payload){
    return {type: ADD_ARTICLE, payload};
}