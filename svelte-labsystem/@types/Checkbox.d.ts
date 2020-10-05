import { LocalSvelteComponent } from "./shared";

export interface ICheckboxProps {
  id: string,
  name: string,
  label: string,
  value?: boolean | string | number,
  checked?: boolean,
  disabled?: boolean,
  indeterminate?: boolean,
}

declare class Checkbox extends LocalSvelteComponent<ICheckboxProps> {}
export default Checkbox;
