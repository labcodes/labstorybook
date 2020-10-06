import { IconTypes, LocalSvelteComponent } from "./shared";

export interface IIconProps {
  color?: "white"
  | "black-75"
  | "mineral-10"
  | "mineral-20"
  | "mineral-30"
  | "mineral-40"
  | "mineral-60"
  | "mineral-70"
  | "mineral-80"
  | "mineral-90"
  | "teal-40"
  | "teal-60"
  | "teal-70"
  | "purple-40"
  | "purple-60"
  | "purple-70",
  type?: IconTypes,
  size?: "small" | "petit",
}

declare class Icon extends LocalSvelteComponent<IIconProps> {}
export default Icon;
