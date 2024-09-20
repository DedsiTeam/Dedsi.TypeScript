

// 表单视图模型
export interface IFormViewModel<TFormData> {

  // 表单数据
  formData: TFormData;

  // 表单验证规则
  fromRules: Array<any>;

  // 表单项 label 宽度
  fromItemLabelWidth: number;

  // 表单提交按钮 文本
  fromSubmitButtonText: string;

  // 表单取消按钮 文本
  fromCancelButtonText: string;
}


// 表单视图模型
export class FormViewModel<TFormData> implements IFormViewModel<TFormData> {

  // 表单数据
  formData: TFormData;

  // 表单验证规则
  fromRules: Array<any> = [];

  // 表单项 label 宽度
  fromItemLabelWidth: number = 120;

  // 表单提交按钮 文本
  fromSubmitButtonText: string = '提交';

  // 表单取消按钮 文本
  fromCancelButtonText: string = '取消';
}