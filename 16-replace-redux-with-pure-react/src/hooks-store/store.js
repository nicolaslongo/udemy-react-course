import { useState, useEffect } from "react";

// This state is some sort of singleton.
let globalState = {};
let listeners = [];
let actions = {};

// Custom Hook that behaves exactly like Redux reducers...
export const useStore = (shouldListen=true) => {
  // every component using my customHook will re-render when useState changes the state value
  const [_, setState] = useState(globalState);

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = {...globalState, ...newState};

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }
    
    return () => {
      if (shouldListen) {
        listeners = listeners.filter(listener => listener !== setState);
      }
    }
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = {...globalState, ...initialState};
  }
  actions = {...actions, ...userActions};
}