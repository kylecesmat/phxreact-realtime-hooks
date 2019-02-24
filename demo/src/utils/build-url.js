import qs from "query-string";

export const buildUrl = (route, query) => {
  const connectionUrl = new URL(route, "http://localhost:3001");
  connectionUrl.protocol = "ws:";
  connectionUrl.search = qs.stringify(query);
  return connectionUrl.href;
};
