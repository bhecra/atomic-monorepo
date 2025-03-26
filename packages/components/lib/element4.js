import { jsx, jsxs } from 'atomico/jsx-runtime';
import { css, c } from 'atomico';

function myInput({ type, placeholder, value }) {
  return /* @__PURE__ */ jsx("host", { shadowDom: true, children: /* @__PURE__ */ jsxs("label", { children: [
    /* @__PURE__ */ jsx("span", { class: "label", children: /* @__PURE__ */ jsx("slot", { name: "label" }) }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type,
        placeholder,
        value
      }
    )
  ] }) });
}
myInput.props = {
  type: { type: String, value: "text" },
  placeholder: String,
  value: String
};
myInput.styles = css`:host{display:block}label{display:flex;flex-direction:column;gap:4px}.label{font-size:14px;color:#333}input{padding:8px;border-radius:4px;border:1px solid #ddd;font-size:16px}input:focus{outline:none;border-color:#3498db}`;
const Input = c(myInput);

export { Input };
