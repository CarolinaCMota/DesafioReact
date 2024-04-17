import { Input as InputComponent } from './styles.js';

export function Input(props) {
    return (
        <InputComponent placeholder={props.placeholder} />
    )
}