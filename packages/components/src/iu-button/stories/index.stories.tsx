import { IuButton } from "../index";
import { define } from "@atomico/storybook";

export default {
    title: "components/iu-button",
    ...define(IuButton, {
        // Optional
        argTypes: {
            color: {
                description: "Description...",
            },
            type: {
                description: "Tipo de botón",
                options: ["primary", "secondary"],
                control: {
                    type: "select",
                },
            },
        },
    }),
};

export const Story = (props) => <IuButton {...props}>button</IuButton>;
