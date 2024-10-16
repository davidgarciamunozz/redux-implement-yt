//create Store using ES6
import { createStore } from 'redux';
import { cakeReducer } from './cake/cakeReducer';

export const store = createStore(cakeReducer);