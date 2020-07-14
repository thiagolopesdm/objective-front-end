import { createStore } from 'redux';

function reducer() {
  return [{ id: 1, title: 'so para testar' }];
}

const store = createStore(reducer);

export default store;
