import { Button } from "../index";
import { define } from "@atomico/storybook";

export default {
    title: "components/Button",
    ...define(Button, {
        argTypes: {
            variant: {
                description: "Establece el estilo visual del botón",
                control: {
                    type: "select",
                    options: ["primary", "secondary"],
                },
            },
        },
    }),
};

export const Primary = (props) => (
    <Button variant="primary" {...props}>
        Botón Principal
    </Button>
);
export const Secondary = (props) => (
    <Button variant="secondary" {...props}>
        Botón Secundario
    </Button>
);
