import {
    TextFieldProps,
    Dividers,
    TextField as LibTextField,
} from 'react-native-ui-lib';

export function TextField(props: TextFieldProps) {
    const style = typeof props.style === 'object' ? props.style : {};

    return (
        <LibTextField
            text60
            floatingPlaceholder
            grey10
            floatingPlaceholderStyle={{
                textAlign: 'center',
            }}
            {...props}
            style={{ ...Dividers.d10, ...style }}
        />
    );
}
