import { c, css, Props } from "atomico";

function myCard({ title }: Props<typeof myCard>) {
    return (
        <host shadowDom>
            <div class="card">
                {title && <div class="title">{title}</div>}
                <div class="content">
                    <slot />
                </div>
            </div>
        </host>
    );
}

myCard.props = {
    title: String,
};

myCard.styles = css`
    :host {
        display: block;
    }

    .card {
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        background: white;
    }

    .title {
        padding: 16px;
        font-weight: bold;
        font-size: 18px;
        border-bottom: 1px solid #eee;
    }

    .content {
        padding: 16px;
    }
`;

export const Card = c(myCard);
