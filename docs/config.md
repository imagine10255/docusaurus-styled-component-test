---
sidebar_position: 4
tags:
  - Components
  - Config
---

# Config
Grid layout related settings


```tsx
import {GridThemeProvider, IGridSetting} from 'bear-react-grid';

const gridTheme: IGridSetting = {
    spacer: '1rem',
    gutter: '1.5rem',
    gridColumns: 12,
    gridBreakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1540,
    },
    containerMaxWidths: {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
        xxl: 1540,
    },
};

<GridThemeProvider gridTheme={gridTheme}>
    <App/>
</GridThemeProvider>
```

## Props

| Props Name    | Type          | Required | Default     | Description                  |
|---------------|---------------|----------|-------------|------------------------------|
| children      | ReactNode     |          |             |                              |
| gridTheme     | IGridSetting  |          | in example  | Grid layout related settings |


### IGridSetting

| Props Name         | Type                             | Required | Default     | Description                     |
|--------------------|----------------------------------|----------|-------------|---------------------------------|
| spacer             | string                           |          | in example  | padding, grid, gap base unit    |
| gutter             | string                           |          | in example  | Grid system padding             |
| gridColumns        | number                           |          | in example  | Grid system col total           |
| gridBreakpoints    | IBreakpoints                     |          | in example  | Grid layout related settings    |
| containerMaxWidths | TContainerMaxWidths              |          | in example  | Grid system container max width |


### IBreakpoints
```ts
{
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
    xxl: number
}
```


### TMediaSize
```ts
'xs'|'sm'|'md'|'lg'|'xl'|'xxl'
```


### TContainerMaxWidths
```ts
Omit<IBreakpoints, 'xs'>
```


### CSS Var

Just adjust it as needed

```css
:root{
    --bear-border-width: 1px;
    --bear-border-style: solid;
    --bear-border-color: #495057;
    --bear-border-radius: 0.375rem;
    --bear-border-radius-sm: 0.25rem;
    --bear-border-radius-lg: 0.5rem;
    --bear-border-radius-xl: 1rem;
    --bear-border-radius-xxl: 2rem;
    --bear-border-radius-2xl: var(--bear-border-radius-xxl);
    --bear-border-radius-pill: 50rem;
}
```
