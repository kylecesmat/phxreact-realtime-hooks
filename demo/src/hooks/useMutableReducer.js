import { useReducer, useCallback } from "react";
import { produce } from "immer";

// Inspired by Brandon Dail
// https://twitter.com/aweary/status/1055517146942386177?s=20
const useMutableReducer = (reducer, initialState, initialAction) => {
  const mutableReducer = useCallback(
    (state, action) => produce(state, draft => reducer(draft, action)),
    [reducer]
  );
  return useReducer(mutableReducer, initialState, initialAction);
};

export default useMutableReducer;
