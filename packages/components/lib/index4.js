import { g as gridName, G as Grid, a as gridColumnName, b as GridColumn, c as gridRowName, d as GridRow } from './chunks/24411-2448e-24413.js';
import 'atomico';
import './component.styles.js';
import './component.props.js';

if (!customElements.get(gridName)) {
  customElements.define(gridName, Grid);
}
if (!customElements.get(gridColumnName)) {
  customElements.define(gridColumnName, GridColumn);
}
if (!customElements.get(gridRowName)) {
  customElements.define(gridRowName, GridRow);
}

export { Grid, GridColumn, GridRow };
