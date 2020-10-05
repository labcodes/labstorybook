import { LocalSvelteComponent } from "./shared";

export interface IRadioProps {
  id: string,
  name: string,
  label: string,
  group?: string,
  value?: boolean | string | number,
  disabled?: boolean,
}

declare class Radio extends LocalSvelteComponent<IRadioProps> {}
export default Radio;
