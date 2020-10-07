import { LocalSvelteComponent } from "./shared";

export interface IToggleProps {
  color?: "teal" | "purple",
  disabled?: boolean,
  value?: boolean,
  name: string,
}

declare class Toggle extends LocalSvelteComponent<IToggleProps> {}
export default Toggle;
