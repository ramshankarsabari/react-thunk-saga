import index from "./js/index";
import store from "./js/store/index";
import { AddArticle } from "./js/actions/index";

window.store = store;
window.addArticle = AddArticle;