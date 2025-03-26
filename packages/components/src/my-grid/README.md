# Grid Web Component
Este componente permite utilizar grid-system como un webcomponent. Se implemetan varios componentes en el contexto del 
webcomponente para ayudar en el uso del sistema de grillas.

## Implementacion
Basta con instalar `@dscla/ds-grid` y `@dscla/ds-tokens`.

## Componentes
| Nombre                     | Uso                                                                           | Propiedades                                                                                                                                               |
|----------------------------|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **ds-grid**        | Componente contenedor. Permite el uso de los demas componentes internalmente. | `fluid`                                                                                                                                                   |
| **ds-grid-row**    | Componente de fila. Permite utilizar componentes de columna en su interior.   | `reverse`                                                                                                                                                 |
| **ds-grid-column** | Componente de columna. Permite incrustar contenido en su interior.            | `debug, sm, md, lg, sm-offset, md-offset, lg-offset, sm-align, md-align, lg-align, start, center, end, top, middle, bottom, first, last, around, between` |

### Descripcion
- `fluid`: Permite a la grilla ocupar el 100% del contenedor padre.
- `reverse`: Permite invertir el orden de las columnas. Es incompatible en columnas con offset.
- `debug`: Permite visualizar como van a quedar las columnas. Agrega el numero a la columnas.
- `sm, md, lg`: Configura el tamaño de la columna. Los tamaños son entre 1-12.
- `sm-offset, md-offset, lg-offset`: Configura el offset en cada tamaño de columna. Los tamaños son entre 1-12.
- `sm-align, md-align, lg-align`: Configura la alineacion de los elementos internos de la columna en cada tamaño especifico. 
Las alineaciones disponibles son "start, center, end, top, middle, bottom, first, last, around, between".
- `start, center, end, top, middle, bottom, first, last, around, between`: Configura la alineacion los elementos de la  columna en todos los tamaños disponibles.
Es incompatible con el uso de las propiedades "align".

## Ejemplo
```json
<ds-grid>
    <ds-grid-row>
        <ds-grid-column sm="12" md="2" lg="4" center>
          <div style="background-color: red; width: 100%; color: white;">hola</div>
        </ds-grid-column>
        <ds-grid-column sm="12" md="2" lg="4" center>
          <div style="background-color: blue; width: 100%; color: white;">que</div>
        </ds-grid-column>
        <ds-grid-column sm="12" md="2" lg="4" center>
          <div style="background-color: green; width: 100%; color: white;">tal</div>
        </ds-grid-column>
        <ds-grid-column sm="12" md="2" lg="12" sm-align="center" md-align="last" lg-align="start">
          <div style="background-color: pink; width: 100%; color: white;">como</div>
        </ds-grid-column>
        <ds-grid-column sm="12" md="2" lg="6" lg-offset="6" center>
          <div style="background-color: yellow; width: 100%; color: black;">se</div>
        </ds-grid-column>
        <ds-grid-column sm="12" md="2" lg="12" center>
          <div style="background-color: orange; width: 100%; color: white;">encuentran</div>
        </ds-grid-column>
    </ds-grid-row>
</ds-grid>
```

