import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class ApiClient {
  private static readonly baseUrl = "http://localhost:8000/food";
  // api_key = "";
  private static readonly instance: AxiosInstance = axios.create();

  static async get(
    path: string,
    queryParams?: Object,
    options?: AxiosRequestConfig
  ) {
    return ApiClient.callApi(path, {
      ...options,
      method: "GET",
      params: { ...queryParams },
    });
  }
  static async post(
    path: string,
    payload?: BodyInit,
    options?: AxiosRequestConfig
  ) {
    return ApiClient.callApi(path, {
      ...options,
      method: "POST",
      data: payload,
    });
  }

  static async delete(path: string, options?: AxiosRequestConfig) {
    return ApiClient.callApi(path, {
      ...options,
      method: "DELETE",
    });
  }

  private static async callApi(path: string, options?: AxiosRequestConfig) {
    const requestConfig = {
      method: options?.method,
      baseURL: ApiClient.baseUrl,
      url: path,
      params: options && options.params,
      data: options && options.data,
      headers: {
        // ApiKey: ApiClient.apiKey,
        ...(options && options.headers),
      },
      responseType:
        options && options.responseType ? options.responseType : "json",
    };
    let fetchResponse = {};
    try {
      // ApiClient.authInterceptor();
      fetchResponse = await ApiClient.instance(requestConfig);

      //return ApiClient.checkStatus(fetchResponse);
    } catch (err) {
      //ApiClient.checkStatus(err.response);
      throw Error;
    }

    return fetchResponse;
  }

  // authInterceptor() {
  //   this.instance.interceptors.request.use(
  //     (config) => {
  //       const token = localStorage.getItem("TOKEN");
  //       if (token) {
  //         config.headers = {
  //           ...config.headers,
  //           ...{
  //             Authorization: `Bearer ${token}`,
  //           },
  //         };
  //       }

  //       return config;
  //     },
  //     (error) => {
  //       return Promise.reject(error);
  //     }
  //   );
  // }
}
