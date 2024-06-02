import { IViewModel } from '../IViewModel'

import { ITable } from './ITable'



// 列表视图模型
export interface ITableListViewModel<TRowItem> extends IViewModel {
  // 表格
  table: ITable<TRowItem>;
}