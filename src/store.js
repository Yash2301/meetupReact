import { createStore } from 'redux'
import rootReducer from './reducers'

// Pass enhancer as the second arg, since there's no preloadedState
const store = createStore(rootReducer);

export default store