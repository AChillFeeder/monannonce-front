import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

interface FormField {
    name: string;
    label: string;
    value: string;
}

interface FormProps {
    fields: FormField[];
    onSubmit: (data: { [key: string]: string }) => void;
}

const FormulairePassePartout: React.FC<FormProps> = ({ fields, onSubmit }) => {
    const [formData, setFormData] = React.useState<{ [key: string]: string }>(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: field.value }), {})
);

const handleChange = (name: string, value: string) => {
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};

const handleSubmit = () => {
    onSubmit(formData);
};

return (
    <View style={styles.container}>
    {fields.map((field) => (
        <TextInput
            key={field.name}
            label={field.label}
            value={formData[field.name]}
            onChangeText={(value) => handleChange(field.name, value)}
            style={styles.input}
            mode="outlined"
        />
    ))}
    <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Envoyer
    </Button>
    </View>
);
};

const styles = StyleSheet.create({
container: {
    padding: 16,
    backgroundColor: '#fff',
},
input: {
    marginBottom: 16,
},
button: {
    marginTop: 16,
},
});

export default FormulairePassePartout;
