import axios, { AxiosInstance } from 'axios'
import { AxiosRequestConfig } from 'axios';

// Axios Http Request
export class AxiosRequest {

  // 当前axios 实例
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = this.createAxios({
      baseURL: baseURL,
    });
  }

  // 创建 axios 实例
  createAxios(config: AxiosRequestConfig) {
    return axios.create(config);
  }

  request<TInput, TResult>(config: AxiosRequestConfig<TInput>) {
    return this.axiosInstance.request<TResult,TResult,TInput>(config);
  }

  // POST Http Request
  post<TInput, TResult>(url: string, data: TInput) {
    return this.request<TInput,TResult>({
      url,
      data,
      method: 'POST'
    });
  }

  // GET Http Request
  get<TInput, TResult>(url: string, params?: TInput){
    return this.request<null, TResult>({
      url,
      params,
      method: 'GET'
    })
  }

}