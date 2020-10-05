import { LocalSvelteComponent } from "./shared";

export interface ITooltipProps {
  placement?: "top-start"
  | "top"
  | "top-end"
  | "right-start"
  | "right"
  | "right-end"
  | "bottom-start"
  | "left-start"
  | "left"
  | "left-end"
  | "bottom"
  | "bottom-end",
  text: string,
  id: string,
}

declare class Tooltip extends LocalSvelteComponent<ITooltipProps> {}
export default Tooltip;
