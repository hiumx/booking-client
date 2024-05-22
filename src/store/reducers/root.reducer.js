
import {combineReducers} from 'redux';
import userReducer from './user.reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}

const userConfig = {
    ...commonConfig,
    key: "user",
    whitelist: ["userMyInfo"]
    
}

const rootReducer = combineReducers({
    user: persistReducer(userConfig, userReducer)
});

export default rootReducer;