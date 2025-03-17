import { UiIcon } from "../index";
import { define } from "@atomico/storybook";

export default {
    title: "components/ui-icon",
    ...define(UiIcon, {
        // Optional
        argTypes: {
            color: {
                description: "Description...",
            },
        },
    }),
};

export const Story = (props) => <UiIcon {...props}>Atomico!</UiIcon>;
