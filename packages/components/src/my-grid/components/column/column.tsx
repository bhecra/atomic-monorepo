import { c, useState, useEffect, html, Props } from 'atomico';

import Styles from './column.styles';
import IProps from './column.props';

function ColumnComponent(props: Props<typeof ColumnComponent>) {
  // Props
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
    debugIndex,
  } = props;

  // State
  const [columnClass, setColumnClass] = useState('');

  // Methods
  const methods = {
    validation: {
      isSize: (size) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(size),
      isNumber: (value) => !!parseInt(value, 10),
      isPosition: (value) => {
        const positions = [
          'start',
          'center',
          'end',
          'top',
          'middle',
          'bottom',
          'first',
          'last',
          'around',
          'between',
        ];
        return positions.includes(value);
      },
    },
    calculate: {
      position: (value) => `${value}-xs ${value}-sm ${value}-md ${value}-lg ${value}-xl`,
      align: (value, size) => {
        const { isSize, isPosition } = methods.validation;
        if (isPosition(value) && isSize(size)) {
          return `${value}-${size}`;
        }
        return '';
      },
      offset: (value, size) => {
        const { isNumber, isSize } = methods.validation;
        if (isNumber(value) && isSize(size)) {
          return `col-${size}-offset-${value}`;
        }
        return '';
      },
      size: (value, size) => {
        const { isNumber } = methods.validation;
        if (isNumber(value)) return `col-${size}-${value}`;
        return '';
      },
      class: () => {
        let current = 'col ';
        if (reverse) current += 'reverse ';

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
            last,
          })
            .filter(([key, val]) => (val ? key : null))
            .forEach(([size]) => {
              current += `${methods.calculate.position(size)} `;
            });
        }

        if (offset.xs || offset.sm || offset.md || offset.lg || offset.xl) {
          Object.entries({
            ...offset,
          })
            .filter(([key, val]) => (val ? key : null))
            .forEach(([size, value]) => {
              current += `${methods.calculate.offset(value, size)} `;
            });
        }

        if (align.xs || align.sm || align.md || align.lg || align.xl) {
          Object.entries({
            ...align,
          })
            .filter(([key, val]) => (val ? key : null))
            .forEach(([size, value]) => {
              current += `${methods.calculate.align(value, size)} `;
            });
        }

        if (xs || sm || md || lg || xl) {
          Object.entries({
            xs,
            sm,
            md,
            lg,
            xl,
          })
            .filter(([key, val]) => (val ? key : null))
            .forEach(([size, value]) => {
              current += `${methods.calculate.size(value, size)} `;
            });
        }

        setColumnClass(current.trim());
      },
    },
  };

  // Effects
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
    last,
  ]);

  return html`
    <host shadowDom>
      <div className=${columnClass}>
        ${debug ? html`<div className="debug">${debugIndex}</div>` : html`<slot></slot>`}
      </div>
    </host>
  `;
}

ColumnComponent.props = IProps;
ColumnComponent.styles = Styles;

export const GridColumn = c(ColumnComponent);
export const gridColumnName = 'ds-grid-column';

// Asegurarse de que el componente esté registrado si se importa directamente este archivo
if (typeof window !== 'undefined' && !customElements.get(gridColumnName)) {
  customElements.define(gridColumnName, GridColumn);
}

