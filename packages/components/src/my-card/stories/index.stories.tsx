import { Card } from "../index";
import { define } from "@atomico/storybook";

export default {
    title: "components/Card",
    ...define(Card, {
        argTypes: {
            title: {
                description: "Título de la tarjeta",
                control: "text",
            },
        },
    }),
};

export const Default = (props) => (
    <Card {...props}>
        Este es el contenido de la tarjeta. Puedes poner cualquier texto o
        componente aquí.
    </Card>
);

export const WithTitle = (props) => (
    <Card title="Título de ejemplo" {...props}>
        Esta tarjeta tiene un título y contenido. El título se muestra en la
        parte superior.
    </Card>
);
