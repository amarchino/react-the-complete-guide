import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

export default function useStore() {
  const [ _, setState ] = useState(globalState);

  function dispatch(actionIdentifier, payload) {
    const newState = actions[actionIdentifier]?.(globalState);
    globalState = { ...globalState, ...newState };
    listeners.forEach(li => li(globalState, payload));
  }

  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filte(li => li !== setState);
    }
  }, [ setState ]);

  return [ globalState, dispatch ];
}

export function initStore(userActions, initialState) {
  if(initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };

}
