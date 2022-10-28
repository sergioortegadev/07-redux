import { createReducer } from "@reduxjs/toolkit";

import reducer from "../reducers";

const store = createReducer(reducer);

store.subcribe(() => console.log(store));

export default store;

// VER DOC https://redux-toolkit.js.org/api/createReducer
