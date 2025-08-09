import axios, { AxiosResponse } from "axios";
const API_PORT = `api/`;

export const createApi = () => {
  return axios.create({
    baseURL: API_PORT,
    withCredentials: true,
  });
};

interface AxiosMutationParams<T> {
  path: string;
  data: T;
  method?: "post" | "put";
}

export const AxiosMutation = async <T>({
  path,
  data,
  method = "post",
}: AxiosMutationParams<T>): Promise<AxiosResponse> => {
  const axios = createApi();
  return await axios[method](path, data);
};

export const AxiosQuery = async ({ path }: { path: string }): Promise<AxiosResponse> => {
  const axios = createApi();
  return await axios.get(path);
};
