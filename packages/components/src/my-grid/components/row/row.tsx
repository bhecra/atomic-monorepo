/* eslint-disable react-hooks/exhaustive-deps */

import { c, useState, useEffect, useRef, html, Props } from 'atomico';

import Styles from './row.styles';
import IProps from './row.props';

function RowComponent(props: Props<typeof RowComponent>) {
  // Props
  const { reverse } = props;

  // Refs
  const slotRef = useRef();

  // State
  const [rowClass, setRowClass] = useState('');

  // Methods
  const calculateClass = () => {
    let current = 'row ';
    if (reverse) current += 'reverse ';
    setRowClass(current.trim());
  };

  // Simplificamos la función de setColumnIndex para no depender de useSlot
  const setColumnIndex = () => {
    // Esta función será llamada cuando el slot emita un evento de slotchange
    if (slotRef.current) {
      const handleSlotChange = () => {
        const slot = slotRef.current;
        if (!slot) return;
        
        // Obtenemos los elementos asignados directamente del slot
        const assignedElements = slot.assignedElements 
          ? slot.assignedElements() 
          : Array.from(slot.children || []);
        
        let index = 1;
        assignedElements
          .filter((column) => column.localName === 'ds-grid-column')
          .forEach((column) => {
            const current = column as any;
            current.debugIndex = String(index);
            index += 1;
          });
      };

      // Añadimos un listener para el evento slotchange
      slotRef.current.addEventListener('slotchange', handleSlotChange);
      
      // Llamamos a la función inicialmente para configurar los índices
      setTimeout(handleSlotChange, 0);
      
      // Retornamos una función de limpieza para que se ejecute al desmontar el componente
      return () => {
        if (slotRef.current) {
          slotRef.current.removeEventListener('slotchange', handleSlotChange);
        }
      };
    }
  };

  // Effects
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

RowComponent.props = IProps;
RowComponent.styles = Styles;

export const GridRow = c(RowComponent);
export const gridRowName = 'ds-grid-row';

// Asegurarse de que el componente esté registrado si se importa directamente este archivo
if (typeof window !== 'undefined' && !customElements.get(gridRowName)) {
  customElements.define(gridRowName, GridRow);
}

