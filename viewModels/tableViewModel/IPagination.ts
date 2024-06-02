// 分页
export interface IPagination {
  // 数据总数
  total: number;

  // 当前页数
  current: number;

  // 每页条数
  pageSize: number;

  // 禁用分页
  disabled: boolean;

  // 只有一页时是否隐藏分页器
  hideOnSinglePage: boolean;

  // 指定每页可以显示多少条
  pageSizeOptions: number[];
}

// 分页
export class Pagination implements IPagination {
  // 数据总数
  total: number = 0;

  // 当前页数
  current: number = 1;

  // 每页条数
  pageSize: number = DefaultPageSize;

  // 禁用分页
  disabled: boolean = false;

  // 只有一页时是否隐藏分页器
  hideOnSinglePage: boolean = true;

  // 指定每页可以显示多少条
  pageSizeOptions: number[] = DefaultPageSizeOptions;
}

// 默认：每页条数
export const DefaultPageSize = 10;

// 默认：每页可以显示多少条
export const DefaultPageSizeOptions = [ 10, 20, 50, 100];