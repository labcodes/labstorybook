import { IBaseTextInputProps, ITextEmailInputProps, LocalSvelteComponent } from "./shared";

declare class EmailInput extends LocalSvelteComponent<IBaseTextInputProps & ITextEmailInputProps> { }
export default EmailInput;
