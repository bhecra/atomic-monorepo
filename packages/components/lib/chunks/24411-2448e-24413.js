import { css, useState, useEffect, html, c, useRef } from 'atomico';
import Styles$3 from '../component.styles.js';
import IProps from '../component.props.js';

const Styles$2 = css`.container-fluid,.container{margin-right:auto;margin-left:auto}@media only screen and (width <= 479px){.container{margin-right:16px;margin-left:16px}}@media only screen and (width >= 480px) and (width <= 767px){.container{margin-right:16px;margin-left:16px}}@media only screen and (width >= 768px) and (width <= 1023px){.container{margin-right:16px;margin-left:16px}}@media only screen and (width >= 1024px) and (width <= 1363px){.container{margin-right:16px;margin-left:16px}}@media only screen and (width >= 1364px){.container{width:100%;max-width:1332px;margin-right:auto;margin-left:auto}}`;

const Props$2 = {
  fluid: {
    type: Boolean,
    reflect: true,
  },
};

function ContainerComponent(props) {
  const { fluid } = props;
  const [containerClass, setContainerClass] = useState("");
  const calculateClass = () => {
    let current = "container";
    if (fluid)
      current = "container-fluid";
    setContainerClass(current);
  };
  useEffect(() => {
    calculateClass();
  }, [fluid]);
  return html`
    <host shadowDom>
      <div className=${containerClass}>
        <slot></slot>
      </div>
    </host>
  `;
}
ContainerComponent.styles = Styles$2;
ContainerComponent.props = Props$2;
const GridContainer = c(ContainerComponent);
const gridContainerName = "ds-grid-container";
if (typeof window !== "undefined" && !customElements.get(gridContainerName)) {
  customElements.define(gridContainerName, GridContainer);
}

const Styles$1 = css`:host{display:contents}.debug{width:100%;color:#000;text-align:center;background-color:#ffe1df}.col.reverse{flex-direction:column-reverse}@media only screen and (width <= 479px){.col-xs,.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-offset-0,.col-xs-offset-1,.col-xs-offset-2,.col-xs-offset-3,.col-xs-offset-4,.col-xs-offset-5,.col-xs-offset-6,.col-xs-offset-7,.col-xs-offset-8,.col-xs-offset-9,.col-xs-offset-10,.col-xs-offset-11,.col-xs-offset-12{box-sizing:border-box;flex:0 0 auto;padding-right:var(--half-gutter-width, .5rem);padding-left:var(--half-gutter-width, .5rem)}.col-xs{flex-grow:1;flex-basis:0;max-width:100%}.col-xs-1{flex-basis:8.33333333%;max-width:8.33333333%}.col-xs-2{flex-basis:16.66666667%;max-width:16.66666667%}.col-xs-3{flex-basis:25%;max-width:25%}.col-xs-4{flex-basis:33.33333333%;max-width:33.33333333%}.col-xs-5{flex-basis:41.66666667%;max-width:41.66666667%}.col-xs-6{flex-basis:50%;max-width:50%}.col-xs-7{flex-basis:58.33333333%;max-width:58.33333333%}.col-xs-8{flex-basis:66.66666667%;max-width:66.66666667%}.col-xs-9{flex-basis:75%;max-width:75%}.col-xs-10{flex-basis:83.33333333%;max-width:83.33333333%}.col-xs-11{flex-basis:91.66666667%;max-width:91.66666667%}.col-xs-12{flex-basis:100%;max-width:100%}.col-xs-offset-0{margin-left:0}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-11{margin-left:91.66666667%}.start-xs{justify-content:flex-start;text-align:start}.center-xs{justify-content:center;text-align:center}.end-xs{justify-content:flex-end;text-align:end}.top-xs{align-items:flex-start}.middle-xs{align-items:center}.bottom-xs{align-items:flex-end}.around-xs{justify-content:space-around}.between-xs{justify-content:space-between}.first-xs{order:-1}.last-xs{order:1}}@media only screen and (width >= 480px) and (width <= 767px){.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-offset-0,.col-sm-offset-1,.col-sm-offset-2,.col-sm-offset-3,.col-sm-offset-4,.col-sm-offset-5,.col-sm-offset-6,.col-sm-offset-7,.col-sm-offset-8,.col-sm-offset-9,.col-sm-offset-10,.col-sm-offset-11,.col-sm-offset-12{box-sizing:border-box;flex:0 0 auto;padding-right:var(--half-gutter-width, .5rem);padding-left:var(--half-gutter-width, .5rem)}.col-sm{flex-grow:1;flex-basis:0;max-width:100%}.col-sm-1{flex-basis:8.33333333%;max-width:8.33333333%}.col-sm-2{flex-basis:16.66666667%;max-width:16.66666667%}.col-sm-3{flex-basis:25%;max-width:25%}.col-sm-4{flex-basis:33.33333333%;max-width:33.33333333%}.col-sm-5{flex-basis:41.66666667%;max-width:41.66666667%}.col-sm-6{flex-basis:50%;max-width:50%}.col-sm-7{flex-basis:58.33333333%;max-width:58.33333333%}.col-sm-8{flex-basis:66.66666667%;max-width:66.66666667%}.col-sm-9{flex-basis:75%;max-width:75%}.col-sm-10{flex-basis:83.33333333%;max-width:83.33333333%}.col-sm-11{flex-basis:91.66666667%;max-width:91.66666667%}.col-sm-12{flex-basis:100%;max-width:100%}.col-sm-offset-0{margin-left:0}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-11{margin-left:91.66666667%}.start-sm{justify-content:flex-start;text-align:start}.center-sm{justify-content:center;text-align:center}.end-sm{justify-content:flex-end;text-align:end}.top-sm{align-items:flex-start}.middle-sm{align-items:center}.bottom-sm{align-items:flex-end}.around-sm{justify-content:space-around}.between-sm{justify-content:space-between}.first-sm{order:-1}.last-sm{order:1}}@media only screen and (width >= 768px) and (width <= 1023px){.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-offset-0,.col-md-offset-1,.col-md-offset-2,.col-md-offset-3,.col-md-offset-4,.col-md-offset-5,.col-md-offset-6,.col-md-offset-7,.col-md-offset-8,.col-md-offset-9,.col-md-offset-10,.col-md-offset-11,.col-md-offset-12{box-sizing:border-box;flex:0 0 auto;padding-right:var(--half-gutter-width, .5rem);padding-left:var(--half-gutter-width, .5rem)}.col-md{flex-grow:1;flex-basis:0;max-width:100%}.col-md-1{flex-basis:8.33333333%;max-width:8.33333333%}.col-md-2{flex-basis:16.66666667%;max-width:16.66666667%}.col-md-3{flex-basis:25%;max-width:25%}.col-md-4{flex-basis:33.33333333%;max-width:33.33333333%}.col-md-5{flex-basis:41.66666667%;max-width:41.66666667%}.col-md-6{flex-basis:50%;max-width:50%}.col-md-7{flex-basis:58.33333333%;max-width:58.33333333%}.col-md-8{flex-basis:66.66666667%;max-width:66.66666667%}.col-md-9{flex-basis:75%;max-width:75%}.col-md-10{flex-basis:83.33333333%;max-width:83.33333333%}.col-md-11{flex-basis:91.66666667%;max-width:91.66666667%}.col-md-12{flex-basis:100%;max-width:100%}.col-md-offset-0{margin-left:0}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-3{margin-left:25%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-6{margin-left:50%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-9{margin-left:75%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-11{margin-left:91.66666667%}.start-md{justify-content:flex-start;text-align:start}.center-md{justify-content:center;text-align:center}.end-md{justify-content:flex-end;text-align:end}.top-md{align-items:flex-start}.middle-md{align-items:center}.bottom-md{align-items:flex-end}.around-md{justify-content:space-around}.between-md{justify-content:space-between}.first-md{order:-1}.last-md{order:1}}@media only screen and (width >= 1024px) and (width <= 1363px){.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-offset-0,.col-lg-offset-1,.col-lg-offset-2,.col-lg-offset-3,.col-lg-offset-4,.col-lg-offset-5,.col-lg-offset-6,.col-lg-offset-7,.col-lg-offset-8,.col-lg-offset-9,.col-lg-offset-10,.col-lg-offset-11,.col-lg-offset-12{box-sizing:border-box;flex:0 0 auto;padding-right:var(--half-gutter-width, .5rem);padding-left:var(--half-gutter-width, .5rem)}.col-lg{flex-grow:1;flex-basis:0;max-width:100%}.col-lg-1{flex-basis:8.33333333%;max-width:8.33333333%}.col-lg-2{flex-basis:16.66666667%;max-width:16.66666667%}.col-lg-3{flex-basis:25%;max-width:25%}.col-lg-4{flex-basis:33.33333333%;max-width:33.33333333%}.col-lg-5{flex-basis:41.66666667%;max-width:41.66666667%}.col-lg-6{flex-basis:50%;max-width:50%}.col-lg-7{flex-basis:58.33333333%;max-width:58.33333333%}.col-lg-8{flex-basis:66.66666667%;max-width:66.66666667%}.col-lg-9{flex-basis:75%;max-width:75%}.col-lg-10{flex-basis:83.33333333%;max-width:83.33333333%}.col-lg-11{flex-basis:91.66666667%;max-width:91.66666667%}.col-lg-12{flex-basis:100%;max-width:100%}.col-lg-offset-0{margin-left:0}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-11{margin-left:91.66666667%}.start-lg{justify-content:flex-start;text-align:start}.center-lg{justify-content:center;text-align:center}.end-lg{justify-content:flex-end;text-align:end}.top-lg{align-items:flex-start}.middle-lg{align-items:center}.bottom-lg{align-items:flex-end}.around-lg{justify-content:space-around}.between-lg{justify-content:space-between}.first-lg{order:-1}.last-lg{order:1}}@media only screen and (width >= 1364px){.container{width:1364px}.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-offset-0,.col-xl-offset-1,.col-xl-offset-2,.col-xl-offset-3,.col-xl-offset-4,.col-xl-offset-5,.col-xl-offset-6,.col-xl-offset-7,.col-xl-offset-8,.col-xl-offset-9,.col-xl-offset-10,.col-xl-offset-11,.col-xl-offset-12{box-sizing:border-box;flex:0 0 auto;padding-right:var(--half-gutter-width, .5rem);padding-left:var(--half-gutter-width, .5rem)}.col-xl{flex-grow:1;flex-basis:0;max-width:100%}.col-xl-1{flex-basis:8.33333333%;max-width:8.33333333%}.col-xl-2{flex-basis:16.66666667%;max-width:16.66666667%}.col-xl-3{flex-basis:25%;max-width:25%}.col-xl-4{flex-basis:33.33333333%;max-width:33.33333333%}.col-xl-5{flex-basis:41.66666667%;max-width:41.66666667%}.col-xl-6{flex-basis:50%;max-width:50%}.col-xl-7{flex-basis:58.33333333%;max-width:58.33333333%}.col-xl-8{flex-basis:66.66666667%;max-width:66.66666667%}.col-xl-9{flex-basis:75%;max-width:75%}.col-xl-10{flex-basis:83.33333333%;max-width:83.33333333%}.col-xl-11{flex-basis:91.66666667%;max-width:91.66666667%}.col-xl-12{flex-basis:100%;max-width:100%}.col-xl-offset-0{margin-left:0}.col-xl-offset-1{margin-left:8.33333333%}.col-xl-offset-2{margin-left:16.66666667%}.col-xl-offset-3{margin-left:25%}.col-xl-offset-4{margin-left:33.33333333%}.col-xl-offset-5{margin-left:41.66666667%}.col-xl-offset-6{margin-left:50%}.col-xl-offset-7{margin-left:58.33333333%}.col-xl-offset-8{margin-left:66.66666667%}.col-xl-offset-9{margin-left:75%}.col-xl-offset-10{margin-left:83.33333333%}.col-xl-offset-11{margin-left:91.66666667%}.start-xl{justify-content:flex-start;text-align:start}.center-xl{justify-content:center;text-align:center}.end-xl{justify-content:flex-end;text-align:end}.top-xl{align-items:flex-start}.middle-xl{align-items:center}.bottom-xl{align-items:flex-end}.around-xl{justify-content:space-around}.between-xl{justify-content:space-between}.first-xl{order:-1}.last-xl{order:1}}`;

const sizes = {
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: '',
};

const Props$1 = {
  reverse: {
    type: Boolean,
    reflect: true,
  },
  xs: {
    type: String,
    reflect: true,
  },
  sm: {
    type: String,
    reflect: true,
  },
  md: {
    type: String,
    reflect: true,
  },
  lg: {
    type: String,
    reflect: true,
  },
  xl: {
    type: String,
    reflect: true,
  },
  offset: {
    type: Object,
    reflect: true,
    value: () => (sizes),
  },
  align: {
    type: Object,
    reflect: true,
    value: () => (sizes),
  },
  start: {
    type: Boolean,
    reflect: true,
  },
  center: {
    type: Boolean,
    reflect: true,
  },
  end: {
    type: Boolean,
    reflect: true,
  },
  top: {
    type: Boolean,
    reflect: true,
  },
  middle: {
    type: Boolean,
    reflect: true,
  },
  around: {
    type: Boolean,
    reflect: true,
  },
  between: {
    type: Boolean,
    reflect: true,
  },
  first: {
    type: Boolean,
    reflect: true,
  },
  last: {
    type: Boolean,
    reflect: true,
  },
  debug: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  debugIndex: {
    type: String,
    reflect: true,
    value: '',
  },
  bottom: {
    type: Boolean,
    reflect: true,
  },
};

function ColumnComponent(props) {
  const {
    reverse,
    xs,
    sm,
    md,
    lg,
    xl,
    align,
    offset,
    start,
    center,
    end,
    top,
    middle,
    bottom,
    around,
    between,
    first,
    last,
    debug,
    debugIndex
  } = props;
  const [columnClass, setColumnClass] = useState("");
  const methods = {
    validation: {
      isSize: (size) => ["xs", "sm", "md", "lg", "xl"].includes(size),
      isNumber: (value) => !!parseInt(value, 10),
      isPosition: (value) => {
        const positions = [
          "start",
          "center",
          "end",
          "top",
          "middle",
          "bottom",
          "first",
          "last",
          "around",
          "between"
        ];
        return positions.includes(value);
      }
    },
    calculate: {
      position: (value) => `${value}-xs ${value}-sm ${value}-md ${value}-lg ${value}-xl`,
      align: (value, size) => {
        const { isSize, isPosition } = methods.validation;
        if (isPosition(value) && isSize(size)) {
          return `${value}-${size}`;
        }
        return "";
      },
      offset: (value, size) => {
        const { isNumber, isSize } = methods.validation;
        if (isNumber(value) && isSize(size)) {
          return `col-${size}-offset-${value}`;
        }
        return "";
      },
      size: (value, size) => {
        const { isNumber } = methods.validation;
        if (isNumber(value))
          return `col-${size}-${value}`;
        return "";
      },
      class: () => {
        let current = "col ";
        if (reverse)
          current += "reverse ";
        if (start || center || end || top || middle || bottom || around || between || first || last) {
          Object.entries({
            start,
            center,
            end,
            top,
            middle,
            bottom,
            around,
            between,
            first,
            last
          }).filter(([key, val]) => val ? key : null).forEach(([size]) => {
            current += `${methods.calculate.position(size)} `;
          });
        }
        if (offset.xs || offset.sm || offset.md || offset.lg || offset.xl) {
          Object.entries({
            ...offset
          }).filter(([key, val]) => val ? key : null).forEach(([size, value]) => {
            current += `${methods.calculate.offset(value, size)} `;
          });
        }
        if (align.xs || align.sm || align.md || align.lg || align.xl) {
          Object.entries({
            ...align
          }).filter(([key, val]) => val ? key : null).forEach(([size, value]) => {
            current += `${methods.calculate.align(value, size)} `;
          });
        }
        if (xs || sm || md || lg || xl) {
          Object.entries({
            xs,
            sm,
            md,
            lg,
            xl
          }).filter(([key, val]) => val ? key : null).forEach(([size, value]) => {
            current += `${methods.calculate.size(value, size)} `;
          });
        }
        setColumnClass(current.trim());
      }
    }
  };
  useEffect(() => {
    methods.calculate.class();
  }, [
    reverse,
    xs,
    sm,
    md,
    lg,
    xl,
    align,
    offset,
    start,
    center,
    end,
    top,
    middle,
    bottom,
    around,
    between,
    first,
    last
  ]);
  return html`
    <host shadowDom>
      <div className=${columnClass}>
        ${debug ? html`<div className="debug">${debugIndex}</div>` : html`<slot></slot>`}
      </div>
    </host>
  `;
}
ColumnComponent.props = Props$1;
ColumnComponent.styles = Styles$1;
const GridColumn = c(ColumnComponent);
const gridColumnName = "ds-grid-column";
if (typeof window !== "undefined" && !customElements.get(gridColumnName)) {
  customElements.define(gridColumnName, GridColumn);
}

const Styles = css`.row{box-sizing:border-box;display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:wrap;margin-right:var(--gutter-compensation, -.5rem);margin-left:var(--gutter-compensation, -.5rem)}.row.reverse{flex-direction:row-reverse}@media only screen and (width < 768px){.row.reverse{flex-direction:column-reverse}}`;

const Props = {
  reverse: {
    type: Boolean,
    reflect: true,
  },
};

function RowComponent(props) {
  const { reverse } = props;
  const slotRef = useRef();
  const [rowClass, setRowClass] = useState("");
  const calculateClass = () => {
    let current = "row ";
    if (reverse)
      current += "reverse ";
    setRowClass(current.trim());
  };
  const setColumnIndex = () => {
    if (slotRef.current) {
      const handleSlotChange = () => {
        const slot = slotRef.current;
        if (!slot)
          return;
        const assignedElements = slot.assignedElements ? slot.assignedElements() : Array.from(slot.children || []);
        let index = 1;
        assignedElements.filter((column) => column.localName === "ds-grid-column").forEach((column) => {
          const current = column;
          current.debugIndex = String(index);
          index += 1;
        });
      };
      slotRef.current.addEventListener("slotchange", handleSlotChange);
      setTimeout(handleSlotChange, 0);
      return () => {
        if (slotRef.current) {
          slotRef.current.removeEventListener("slotchange", handleSlotChange);
        }
      };
    }
  };
  useEffect(() => {
    calculateClass();
  }, [reverse]);
  useEffect(() => {
    const cleanup = setColumnIndex();
    return cleanup;
  }, []);
  return html`
    <host shadowDom>
      <div className=${rowClass}>
        <slot ref=${slotRef}></slot>
      </div>
    </host>
  `;
}
RowComponent.props = Props;
RowComponent.styles = Styles;
const GridRow = c(RowComponent);
const gridRowName = "ds-grid-row";
if (typeof window !== "undefined" && !customElements.get(gridRowName)) {
  customElements.define(gridRowName, GridRow);
}

function component({ fluid }) {
  return html`
    <host shadowDom>
      <ds-grid-container fluid=${fluid}>
        <slot></slot>
      </ds-grid-container>
    </host>
  `;
}
component.props = IProps;
component.styles = Styles$3;
const Grid = c(component);
const gridName = "ds-grid";
if (typeof window !== "undefined" && !customElements.get(gridName)) {
  customElements.define(gridName, Grid);
}

const component$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Grid,
  gridName
}, Symbol.toStringTag, { value: 'Module' }));

export { Grid as G, gridColumnName as a, GridColumn as b, gridRowName as c, GridRow as d, component$1 as e, gridName as g };
