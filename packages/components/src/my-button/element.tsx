import { c, css, Props } from "atomico";

function myButton({ variant }: Props<typeof myButton>) {
    return (
        <host shadowDom >
            <button>
                <slot/>
            </button>
        </host>
    );
}

myButton.props = {
    variant: { type: String, value: "primary" }
};

myButton.styles = css`
    :host {
        display: inline-block;
    }
    
    button {
        padding: 8px 16px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        font-weight: bold;
    }
    
    :host([variant="primary"]) button {
        background-color: #3498db;
        color: white;
    }
    
    :host([variant="secondary"]) button {
        background-color: #f1f1f1;
        color: #333;
        border: 1px solid #ddd;
    }
`;

export const Button = c(myButton); 