import { IPagination, Pagination } from './IPagination'

// 表格
export interface ITable<TRowItem> {

  // 表格列
  tableColumns: any[];

  // 表格数据源
  tableDataSource: TRowItem[];

  // 分野配置
  pagination: false | IPagination;

  // 表格边框线
  tableBordered: boolean;

  // 表格是否加载中
  tableLoading: boolean;

  // 表格行 key 的取值
  rowKey: string;

  // 表格是否可滚动
  scroll ?: ITableScroll;
}

// 表格
export class Table<TRowItem> implements ITable<TRowItem> {
  // 表格列
  tableColumns: any[] = [];

  // 表格数据源
  tableDataSource: TRowItem[] = [];

  // 分野配置
  pagination: false | IPagination = new Pagination();

  // 表格边框线
  tableBordered: boolean = false;

  // 表格是否加载中
  tableLoading: boolean = true;

  // 表格行 key 的取值
  rowKey: string = 'id';

  // 表格是否可滚动
  scroll ?: ITableScroll;
}

export interface ITableScroll{
  x: number;
  y: number;
}