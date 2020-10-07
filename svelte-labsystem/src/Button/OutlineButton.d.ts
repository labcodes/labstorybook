import { IconTypes, LocalSvelteComponent } from "../shared";

export interface IOutlineButtonProps {
  text: string,
  skin?: "light"
  | "dark",
  icon?: IconTypes,
  size?: "normal" | "small" | "large",
  disabled?: boolean,
  fullWidth?: boolean,
}

declare class OutlineButton extends LocalSvelteComponent<IOutlineButtonProps> { }
export default OutlineButton;
