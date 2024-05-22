
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import {thunk} from 'redux-thunk';
import rootReducer from '~/store/reducers/root.reducer';

const reduxStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );

    const persist = persistStore(store);
    return {
        store,
        persist
    }
}


export default reduxStore;