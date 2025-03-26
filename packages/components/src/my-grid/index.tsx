import { Grid, gridName } from './component';
import { GridColumn, gridColumnName } from './components/column';
import { GridRow, gridRowName } from './components/row';

export { Grid, GridColumn, GridRow };

// Solo registrar los componentes si aún no están definidos
if (!customElements.get(gridName)) {
  customElements.define(gridName, Grid);
}

if (!customElements.get(gridColumnName)) {
  customElements.define(gridColumnName, GridColumn);
}

if (!customElements.get(gridRowName)) {
  customElements.define(gridRowName, GridRow);
}

