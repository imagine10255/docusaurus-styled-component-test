---
sidebar_position: 3
tags:
  - Components
  - Config
---

# 設定
網格佈局相關設置

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

| Props Name    | Type          | Required | Default     | Description |
|---------------|---------------|----------|-------------|-------------|
| children      | ReactNode     |          |             |             |
| gridTheme     | IGridSetting  |          | in example  | 網格佈局相關設置    |


### IGridSetting

| Props Name         | Type                             | Required | Default     | Description                  |
|--------------------|----------------------------------|----------|-------------|------------------------------|
| spacer             | string                           |          | in example  | padding, grid, gap base unit |
| gutter             | string                           |          | in example  | 網格系統 padding                 |
| gridColumns        | number                           |          | in example  | 網格系統 col 總數                  |
| gridBreakpoints    | IBreakpoints                     |          | in example  | 網格系統斷點尺寸                     |
| containerMaxWidths | TContainerMaxWidths              |          | in example  | 網格系統容器最大寬度                   |


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

依照需要再調整即可

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
