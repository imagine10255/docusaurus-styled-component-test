---
title: 升級到 5.x 指南
tags:
  - Migration
---

從 v0 到 v5 中，發生了一些變化。

除了從業務邏輯上進行拆分之外，為了讓參數和範圍更加清晰，還需要進行相應的改變

## 修改 GridTheme config

- 新增 `spacer: '1rem'`
- 更改 `gutter` 從 `number` 為 `number unit`
- 刪除 `gutterMedia` 改為 utilities className `.g-?`

> 請依文件中的設定為主

## 修改 GridTheme

- 新增 `spacer: '1rem'`
- 更改 `gutter` 從 `number` 為 `number unit`
- 刪除 `gutterMedia` 改為 utilities className `.g-?`

## 修改 Row Props

從 props `noGutter` 改為 utilities className `.g-0`

```tsx
<Row noGutter/>
// modify to
<Row className="g-0"/>
```

- 刪除 `Row` props `horizontal` 改為 utilities className `.justify-content-?`
- 刪除 `Row` props `vertical` 改為 utilities className `.align-item-?`


## 修改 Rewrite GridThemeProvider

modify `Row Margin` and `Col Padding`

```tsx
import {Row} from 'bear-react-grid';

<GridThemeProvider gridTheme={gridTheme}>
    {/* ignore.. */}
</GridThemeProvider>

// remove to

<CustomRow>
    <Col></Col>
</CustomRow>    

const CustomRow = styled(Row)`
    --bear-gutter-x: 12px;
`;
```
