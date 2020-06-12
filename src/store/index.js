import { persistStore } from 'redux-persist';

import { createStore } from 'redux';
import persistReducers from './persistisReducers';

import rootReducer from './modules/rootReducer';

const enhancer =
  process.env.NODE_ENV === 'development'
    ? console.tron.createEnhancer()
    : null;

const store = createStore(persistReducers(rootReducer),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  enhancer
);
const persistor = persistStore(store);


export { store, persistor };
