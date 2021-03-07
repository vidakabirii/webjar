import httpRequestHandler from "@/service/httpRequestHandler";

export const get = async () => {
  const URL = "api";
  return await httpRequestHandler.get(URL).then((response) => response);
};
