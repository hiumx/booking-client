
import {combineReducers} from 'redux';
import userReducer from './user.reducer';
import typeHotelReducer from './typeHotel.reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import convenientReducer from './convenient.reduce';
import hotelReducer from './hotel.reducer';

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}

const userConfig = {
    ...commonConfig,
    key: "user",
    whitelist: ["userMyInfo"]
    
}

const typeHotelConfig = {
    ...commonConfig,
    key: "typeHotel",
    whitelist: ["typesHotel"]
    
}

const convenientConfig = {
    ...commonConfig,
    key: "convenient",
    whitelist: ["convenient"]
    
}

const rootReducer = combineReducers({
    user: persistReducer(userConfig, userReducer),
    typeHotel: persistReducer(typeHotelConfig, typeHotelReducer),
    convenient: persistReducer(convenientConfig, convenientReducer),
    hotel: hotelReducer
});

export default rootReducer;