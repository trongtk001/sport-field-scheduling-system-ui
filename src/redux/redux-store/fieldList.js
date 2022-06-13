import { createStore } from "redux";

import fieldListReducer from "../redux-reducer/fieldListReducer";

const store = createStore(fieldListReducer);

export default store;