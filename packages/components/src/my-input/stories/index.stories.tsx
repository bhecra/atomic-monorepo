import { Input } from "../index";
import { define } from "@atomico/storybook";

export default {
    title: "components/Input",
    ...define(Input as any, {
        argTypes: {
            type: {
                description: "Tipo de campo de entrada",
                options: ["text", "password", "email", "number"],
                control: {
                    type: "select",
                },
            },
            placeholder: {
                description: "Texto de marcador de posición",
                control: "text",
            },
            value: {
                description: "Valor del campo",
                control: "text",
            },
        },
    }),
};

export const Text = (props) => (
    <Input {...props}>
        <span slot="label">Campo de texto</span>
    </Input>
);

export const Password = (props) => (
    <Input type="password" placeholder="Ingrese su contraseña" {...props}>
        <span slot="label">Contraseña</span>
    </Input>
);
