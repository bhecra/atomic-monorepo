import { jsx, jsxs } from 'atomico/jsx-runtime';
import { css, c } from 'atomico';

function myCard({ title }) {
  return /* @__PURE__ */ jsx("host", { shadowDom: true, children: /* @__PURE__ */ jsxs("div", { class: "card", children: [
    title && /* @__PURE__ */ jsx("div", { class: "title", children: title }),
    /* @__PURE__ */ jsx("div", { class: "content", children: /* @__PURE__ */ jsx("slot", {}) })
  ] }) });
}
myCard.props = {
  title: String
};
myCard.styles = css`:host{display:block}.card{border-radius:8px;box-shadow:0 2px 8px #0000001a;overflow:hidden;background:white}.title{padding:16px;font-weight:700;font-size:18px;border-bottom:1px solid #eee}.content{padding:16px}`;
const Card = c(myCard);

export { Card };
