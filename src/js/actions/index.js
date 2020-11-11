//actions.index.js
import {ADD_ARTICLE} from '../constants/index';

export function AddArticle(payload){
    return {type: ADD_ARTICLE, payload};
}

export function getData() {
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "DATA_LOADED", payload: json });
        });
    };
  }