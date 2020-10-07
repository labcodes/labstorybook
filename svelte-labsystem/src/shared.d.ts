
type LocalSvelteProps = {
  children?: any;
  class?: string;
  [key: string]: any;
};

export type IconColors = "white"
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
| "purple-70";

export type IconTypes = "arrow-down"
| "arrow-left"
| "arrow-right"
| "arrow-top"
| "calendar"
| "coin"
| "collapse-closed"
| "collapse-open"
| "check"
| "dropdown-closed"
| "dropdown-open"
| "edit"
| "eye-closed"
| "eye-opened"
| "track"
| "key"
| "logout"
| "lupe"
| "minus"
| "plus"
| "reload"
| "remove"
| "sort"
| "star"
| "trash"
| "upload"
| "arrow-fill-right"
| "arrow-fill-left"
| "chevron-right"
| "chevron-left"
| "menu-expand"
| "menu-collapse"
| "menu-default"
| "external"
| "wallet"
| "workspace";

export interface IBaseTextInputProps {
  id: string,
  label: string,
  disabled?: boolean,
  value?: boolean,
  icon?: IconTypes,
  required?: boolean,
  helpMessage?: string,
  prefix?: string,
  suffix?: string,
  isValid?: boolean,
  customErrorMsg?: string,
}

export interface ITextEmailInputProps {
  iconColor?: IconColors,
  onIconClick?: Function,
}

/**
 * Local svelte class for adding typescript definitions for svelte components
 *
 */
export declare class LocalSvelteComponent<Props = {}> {
  constructor(props: Props & LocalSvelteProps);
  $on<T = any>(event: string, callback: (event: CustomEvent<T>) => void): () => void;
  $$prop_def: Props & LocalSvelteProps;
  render: undefined;
  context: undefined;
  setState: undefined;
  forceUpdate: undefined;
  props: undefined;
  state: undefined;
  refs: undefined;
}
