---
title: Migration to 4.x version
tags:
  - Migration
---

From version 0 to version 5, there have been some changes. In addition to splitting from business logic, in order to make parameters and scope clearer, you need to change them accordingly

## Modify GridTheme config

- add `spacer: '1rem'`
- modify `gutter` from `number` to `number unit`
- remove `gutterMedia` change to `utilities .g-?`

> Please follow the settings in the document.

## Modify Row Props

remove `noGutter` change to `utilities .g-0`

```tsx
<Row noGutter/>
// modify to
<Row className="g-0"/>
```

- remove `Row` props `horizontal` change to utilities className `.align-item-?`
- remove `Row` props `vertical` change to utilities className `.justify-content-?`


## Modify Rewrite GridThemeProvider

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
