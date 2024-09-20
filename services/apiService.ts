import { AxiosRequest } from '../utils/public-api'
import { Method } from 'axios'

// api 服务
export class ApiService {

  constructor(baseURL: string, apiPrefix: string) {
    this.axiosRequest = new AxiosRequest(baseURL);
    this.apiPrefix = apiPrefix;
  }

  // AxiosRequest
  axiosRequest: AxiosRequest;

  apiPrefix: string = 'api/';

  // 模块名称
  moduleName: string;

  // 控制器名称
  controllerName: string;

  // 方法请求
  actionRequest<TInput, TResult>(methodName: string, method: Method, data?: TInput, params?: TInput) {
    return this.axiosRequest.request<TInput, TResult>({
      url:  this.apiPrefix + this.moduleName + '/' + this.controllerName + '/' + methodName,
      method,
      data,
      params
    })
  }

}