import { createStore } from 'redux';

import { rootReducer, initState } from '../reducers';

export const store = createStore(rootReducer, initState)