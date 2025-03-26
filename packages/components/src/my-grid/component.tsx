/* eslint-disable react/no-unknown-property */
import { c, html, Props } from 'atomico';

// Internal components
import './components/container';
import './components/column';
import './components/row';

// Component styles & props
import Styles from './component.styles';
import IProps from './component.props';

function component({ fluid }: Props<typeof component>) {
  return html`
    <host shadowDom>
      <ds-grid-container fluid=${fluid}>
        <slot></slot>
      </ds-grid-container>
    </host>
  `;
}

component.props = IProps;
component.styles = Styles;

export const Grid = c(component);
export const gridName = 'ds-grid';

// Asegurarse de que el componente Grid esté registrado si se importa directamente este archivo
if (typeof window !== 'undefined' && !customElements.get(gridName)) {
  customElements.define(gridName, Grid);
}
