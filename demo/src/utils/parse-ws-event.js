export const parseWsEvent = wsEvent => {
  let json;

  try {
    json = JSON.parse(wsEvent.data);
  } catch (err) {
    console.log(err);
    return;
  }

  return json;
};
