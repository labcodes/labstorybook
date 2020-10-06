
type LocalSvelteProps = {
  children?: any;
  class?: string;
  [key: string]: any;
};

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
