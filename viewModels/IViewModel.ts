import { IAuthorizationViewModel } from './authorizationViewModel/public-api';

// 视图模型
export interface IViewModel extends IAuthorizationViewModel {

  // 当前视图 标题
  viewTitle: string;

  // 当前视图 子标题
  viewSubTitle: string;

}