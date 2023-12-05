import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native';
import { Icon, Input, Text } from '@ui-kitten/components';
interface InputProps {
    onInputChange: (input: string) => void;
    icon: (props: any) => React.ReactElement;
    label?: string;
    placeholder: string;
    defaultValue?: string;
    isSecure?: boolean;
}
const InputProfile: React.FC<InputProps> = ({ onInputChange, icon, label, placeholder, defaultValue, isSecure}): React.ReactElement => {
    const [value, setValue] = React.useState(defaultValue);
    const renderIcon = (props: any): React.ReactElement => (
        <TouchableWithoutFeedback>
            {icon(props)}
        </TouchableWithoutFeedback>
    );
    return (
        <Input
            style={{ margin: 20, borderRadius: 100, marginBottom: 13}}
            value={value}
            label={label}
            placeholder={placeholder}
            accessoryLeft={renderIcon}
            onChangeText={nextValue => { setValue(nextValue), onInputChange(nextValue) }}
            secureTextEntry={isSecure}
        />
    )
}

export default InputProfile

