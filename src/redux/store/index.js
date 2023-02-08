/** @format */

import { combineReducers, configureStore } from "@reduxjs/toolkit"

//import myProfileReducer from "../reducers/myProfileReducer"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { encryptTransform } from "redux-persist-transform-encrypt"
import userIdProfileReducer from "../reducers/userIdProfileReducer"
import allProfilesReducer from "../reducers/allProfileReducer"
import expReducer from "../reducers/expReducer"
import allPostsReducer from "../reducers/allPostsReducer"
import singleExp from "../reducers/singleExp"
import refreshReducer from "../reducers/refreshReducer"
import loginUserReducer from "../reducers/loginUserReducer"

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      onError: (error) => {
        console.log(error)
      },
      secretKey: "Sidath",
    }),
  ],
}

const combinedReducer = combineReducers({
  // myProfile: myProfileReducer,
  allProfiles: allProfilesReducer,
  userIdProfile: userIdProfileReducer,
  userIdExp: expReducer,
  allPosts: allPostsReducer,
  singleExperience: singleExp,
  allChanges: refreshReducer,
  logUser: loginUserReducer,
})

const persistedReducer = persistReducer(persistConfig, combinedReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

const persistor = persistStore(store)

export { store, persistor }
