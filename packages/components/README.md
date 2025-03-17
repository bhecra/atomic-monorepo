# @ds/components

Sistema de componentes web basado en Atomico.js para crear interfaces de usuario consistentes y reutilizables.

## Instalación

```bash
npm install @ds/components
```

## Uso

### Importar componentes

```javascript
// Importar un componente específico
import { Button } from "@ds/components/button";

// Importar múltiples componentes desde el punto de entrada principal
import { Button, Input, Card } from "@ds/components";
```

### Ejemplos de uso

#### Button

```html
<!-- Como componente HTML -->
<ds-button>Botón por defecto</ds-button>
<ds-button variant="secondary">Botón secundario</ds-button>

<!-- Como componente JSX -->
<button>Botón por defecto</button>
<button variant="secondary">Botón secundario</button>
```

#### Input

```html
<!-- Como componente HTML -->
<ds-input placeholder="Ingresa tu nombre">
  <span slot="label">Nombre</span>
</ds-input>

<!-- Como componente JSX -->
<Input placeholder="Ingresa tu nombre" type="text">
  <span slot="label">Nombre</span>
</Input>
```

#### Card

```html
<!-- Como componente HTML -->
<ds-card title="Título de la tarjeta"> Contenido de la tarjeta </ds-card>

<!-- Como componente JSX -->
<Card title="Título de la tarjeta"> Contenido de la tarjeta </Card>
```

## Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar storybook para desarrollo
npm run dev

# Construir componentes para producción
npm run build
```
