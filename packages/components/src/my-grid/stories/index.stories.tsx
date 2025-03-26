import { Grid, GridColumn, GridRow } from "../index";
import { define } from "@atomico/storybook";

export default {
    title: "components/Grid",
    ...define(Grid, {
        argTypes: {
            variant: {
                description: "Establece el estilo visual del botón",
                options: ["primary", "secondary"],
                control: {
                    type: "select",
                },
            },
        },
    }),
};

export const Primary = (props) => (
    <Grid >

        <GridRow>
            <GridColumn xs="12" sm="12" md="12" lg="3" xl="3" className="sidebar" tabIndex={0} >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis veritatis quo corporis dignissimos voluptate voluptatibus nemo voluptatum natus molestias maiores quas asperiores, alias dolor ad nobis, quae est adipisci repudiandae.
            </GridColumn>
            <GridColumn xs="12" sm="12" md="12" lg="9" xl="9" className="content-container" tabIndex={0}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit est voluptate laudantium deleniti, explicabo officia eum perspiciatis nobis quasi. Fuga, illum perferendis. Quae fugit, eligendi provident iure quidem ad ipsa!
            </GridColumn>
        </GridRow>
    </Grid>
);
export const Secondary = (props) => (
    <GridColumn >
        Botón Secundario
    </GridColumn>
);
