import { IViewModel } from '../IViewModel'
import { IFormViewModel, FormViewModel } from '../formViewModel'
import { ITable, Table } from './ITable'



// 表格视图模型
export interface ITableListViewModel<TRowItem,TSearchFromData> extends IViewModel {

  // 表格
  table: ITable<TRowItem>;

  // 搜索条件表单
  searchFrom : IFormViewModel<TSearchFromData>;
}

// 表格视图模型
export class TableListViewModel<TRowItem,TSearchFromData> implements ITableListViewModel<TRowItem,TSearchFromData> {

  // 当前视图 标题
  viewTitle: string = '';

  // 当前视图 子标题
  viewSubTitle: string = '';

  // 当前视图权限码
  currentViewAuthorizationCode: string = '';

  // 表格
  table: ITable<TRowItem> = new Table<TRowItem>();

  // 搜索条件表单
  searchFrom : IFormViewModel<TSearchFromData> = new FormViewModel<TSearchFromData>() ;
}