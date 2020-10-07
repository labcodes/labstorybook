import { IconTypes, IconColors, LocalSvelteComponent } from "./shared";

export interface IIconProps {
  color?: IconColors,
  type?: IconTypes,
  size?: "small" | "petit",
}

declare class Icon extends LocalSvelteComponent<IIconProps> {}
export default Icon;
