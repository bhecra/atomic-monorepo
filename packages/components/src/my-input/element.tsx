import { c, css, Props } from "atomico";

function myInput({ type, placeholder, value }: Props<typeof myInput>) {
    return (
        <host shadowDom>
            <label>
                <span class="label">
                    <slot name="label"></slot>
                </span>
                <input
                    type={type}
                    placeholder={placeholder as string}
                    value={value as string}
                />
            </label>
        </host>
    );
}

myInput.props = {
    type: { type: String, value: "text" },
    placeholder: String,
    value: String,
};

myInput.styles = css`
    :host {
        display: block;
    }

    label {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .label {
        font-size: 14px;
        color: #333;
    }

    input {
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #ddd;
        font-size: 16px;
    }

    input:focus {
        outline: none;
        border-color: #3498db;
    }
`;

export const Input = c(myInput);
