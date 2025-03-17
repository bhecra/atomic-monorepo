import { jsx, jsxs } from 'atomico/jsx-runtime';
import { css, c } from 'atomico';

function uiIcon() {
  return /* @__PURE__ */ jsx("host", { shadowDom: true, children: /* @__PURE__ */ jsxs("h1", { children: [
    "Hi ",
    /* @__PURE__ */ jsx("slot", {})
  ] }) });
}
uiIcon.props = {
  color: String
};
uiIcon.styles = css`:host{display:block}`;
const UiIcon = c(uiIcon);

export { UiIcon };
