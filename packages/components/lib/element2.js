import { jsx } from 'atomico/jsx-runtime';
import { css, c } from 'atomico';

function myButton({ variant }) {
  return /* @__PURE__ */ jsx("host", { shadowDom: true, children: /* @__PURE__ */ jsx("button", { children: /* @__PURE__ */ jsx("slot", {}) }) });
}
myButton.props = {
  variant: { type: String, value: "primary" }
};
myButton.styles = css`:host{display:inline-block}button{padding:8px 16px;border-radius:4px;border:none;cursor:pointer;font-weight:700}:host([variant="primary"]) button{background-color:#3498db;color:#fff}:host([variant="secondary"]) button{background-color:#f1f1f1;color:#333;border:1px solid #ddd}`;
const Button = c(myButton);

export { Button };
