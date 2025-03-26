import { c, useState, useEffect, html, Props } from 'atomico';

import Styles from './container.styles';
import IProps from './container.props';

function ContainerComponent(props: Props<typeof ContainerComponent>) {
  // Props
  const { fluid } = props;

  // State
  const [containerClass, setContainerClass] = useState('');

  // Methods
  const calculateClass = () => {
    let current = 'container';
    if (fluid) current = 'container-fluid';
    setContainerClass(current);
  };

  // Effects
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

ContainerComponent.styles = Styles;
ContainerComponent.props = IProps;

export const GridContainer = c(ContainerComponent);
export const gridContainerName = 'ds-grid-container';

// Asegurarse de que el componente esté registrado si se importa directamente este archivo
if (typeof window !== 'undefined' && !customElements.get(gridContainerName)) {
  customElements.define(gridContainerName, GridContainer);
}
