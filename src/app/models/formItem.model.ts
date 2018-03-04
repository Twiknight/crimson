export interface FormItem {
  id: string;
  label: string;
  defaultValue: number | string;
  value: number | string;
}

export const createFormItem = (id: string, label: string, defaultValue: (number | string)) => (
  {
    id: id,
    label: label,
    defaultValue: defaultValue,
    value: defaultValue
  });

export const modifyItemValue =
  (item: FormItem, newValue: string| number) => Object.assign({}, item, {value: newValue});
