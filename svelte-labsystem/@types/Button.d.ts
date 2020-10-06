import { IconTypes, LocalSvelteComponent } from "./shared";

export interface IButtonProps {
  text: string,
  skin?: "light"
  | "dark"
  | "warning"
  | "destructive"
  | "warning-invert"
  | "destructive-invert"
  | "confirmation-invert",
  icon?: IconTypes,
  size?: "normal" | "small" | "large",
  disabled?: boolean,
  fullWidth?: boolean,
}

declare class Button extends LocalSvelteComponent<IButtonProps> {}
export default Button;
