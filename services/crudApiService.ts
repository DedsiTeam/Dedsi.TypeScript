import { ApiService } from './apiService'


export class CrudApiService extends ApiService{

  constructor(baseURL: string, apiPrefix: string) {
    super(baseURL, apiPrefix);
  }

  // 创建
  create<TInput, TResult>(input: TInput){
    return this.actionRequest<TInput, TResult>('Create', 'POST', input);
  }

  // 修改
  update<TInput, TResult>(input: TInput){
    return this.actionRequest<TInput, TResult>('Update', 'POST', input);
  }

  // 删除
  delete<TInput, TResult>(id: string){
    return this.actionRequest<TInput, TResult>('Delete/' + id, 'POST');
  }

  // 分页查询
  pagedList<TInput, TResult>(input: TInput){
    return this.actionRequest<TInput, TResult>('PagedList', 'POST', input);
  }

  // 查询
  get<TInput, TResult>(id: string){
    return this.actionRequest<TInput, TResult>('Get/' + id, 'GET');
  }

}