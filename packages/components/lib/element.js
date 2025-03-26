import { jsxs, jsx } from 'atomico/jsx-runtime';
import { css, c } from 'atomico';

function iuButton({ color }) {
  return /* @__PURE__ */ jsxs("host", { shadowDom: true, children: [
    /* @__PURE__ */ jsx("slot", {}),
    color && /* @__PURE__ */ jsx("style", { children: `:host{--color: ${color}}` })
  ] });
}
iuButton.props = {
  color: {
    type: String,
    value: "#d600ff"
  }
};
iuButton.styles = css`:host{font-size:.85rem;padding:.5rem 1rem;font-family:Arial,Helvetica,sans-serif;font-weight:700;background:var(--color);color:#fff;border-radius:100px;cursor:pointer}`;
const IuButton = c(iuButton);

export { IuButton };
