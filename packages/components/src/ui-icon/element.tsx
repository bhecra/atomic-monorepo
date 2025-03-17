import { c, css, Props } from "atomico";

function uiIcon() {
    return (
        <host shadowDom>
            <h1>
                Hi <slot />
            </h1>
        </host>
    );
}

uiIcon.props = {
    color: String,
};

uiIcon.styles = css`
    :host {
        display: block;
    }
`;

export const UiIcon = c(uiIcon);
