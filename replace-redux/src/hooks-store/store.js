import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

export default function useStore(shouldListen = true) {
  const [ _, setState ] = useState(globalState);

  function dispatch(actionIdentifier, payload) {
    const newState = actions[actionIdentifier]?.(globalState, payload);
    globalState = { ...globalState, ...newState };
    listeners.forEach(li => li(globalState));
  }

  useEffect(() => {
    if(shouldListen) {
      listeners.push(setState);
    }
    return () => {
      if(shouldListen) {
        listeners = listeners.filter(li => li !== setState);
      }
    }
  }, [ shouldListen, setState ]);

  return [ globalState, dispatch ];
}

export function initStore(userActions, initialState) {
  if(initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };

}
