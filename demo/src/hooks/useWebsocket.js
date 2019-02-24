import { useEffect } from "react";
import useMutableReducer from "./useMutableReducer";
import { parseWsEvent } from "../utils/parse-ws-event";

const ACTIONS = {
  INIT: "WS:INIT",
  UPDATE: "WS:UPDATE",
  CLOSE: "WS:CLOSE"
};

const initialState = {
  isOpen: false,
  data: null
};

const reducer = (draft, action) => {
  switch (action.type) {
    case ACTIONS.INIT:
      draft.isOpen = true;
      break;
    case ACTIONS.UPDATE:
      draft.data = action.payload;
      break;
    case ACTIONS.CLOSE:
      draft.isOpen = false;
      draft.data = initialState.data;
      break;
    default:
      break;
  }
};

const useWebsocket = url => {
  // Essentially 'local state' but could be moved into React.Context for 'global state'
  const [store, dispatch] = useMutableReducer(reducer, initialState);

  useEffect(() => {
    const ws = new WebSocket(url);
    ws.onopen = () => dispatch({ type: ACTIONS.INIT });
    ws.onmessage = wsEvent =>
      dispatch({ type: ACTIONS.UPDATE, payload: parseWsEvent(wsEvent) });

    // Called on 'unmount' and when 'url' changes
    // Use this for cleanup tasks
    return () => {
      dispatch({ type: ACTIONS.CLOSE });
      ws.close();
    };
  }, [url]);

  return [store];
};

export default useWebsocket;
