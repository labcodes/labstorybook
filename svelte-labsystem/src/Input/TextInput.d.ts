import { IBaseTextInputProps, ITextEmailInputProps, LocalSvelteComponent } from "../shared";

declare class TextInput extends LocalSvelteComponent<IBaseTextInputProps & ITextEmailInputProps> {}
export default TextInput;
