import { IconTypes, LocalSvelteComponent } from "./shared";

export interface ITextButtonProps {
  text: string,
  skin?: "light"
  | "dark",
  icon?: IconTypes,
  size?: "normal" | "small" | "large",
  disabled?: boolean,
  fullWidth?: boolean,
}

declare class TextButton extends LocalSvelteComponent<ITextButtonProps> {}
export default TextButton;
