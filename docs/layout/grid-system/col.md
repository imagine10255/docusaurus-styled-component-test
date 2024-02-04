---
sidebar_position: 3
tags:
  - Components
  - Grid System
---

# Col

Component used to allocate block proportions

Columns are incredibly flexible. There are 12 template columns available per row, allowing you to create different combinations of elements that span any number of columns. Column classes indicate the number of template columns to span (e.g., col-4 spans four). widths are set in percentages so you always have the same relative sizing.

```tsx
import {Container, Row, Col} from 'bear-react-grid';

<Container>
    <Row>
        <Col col>
            {/*...ignore some */}
        </Col>
    </Row>
</Container>
```


## Props


| Props Name | Type             | Required | Default | Description                                     |
|------------|------------------| -------- |---------|-------------------------------------------------|
| style      | CSS.Properties   |          |         |                                                 |
| className  | string           |          |         |                                                 |
| children   | ReactNode        |          |         |                                                 |
| col        | [TCol](#tcol)    |          | false   | `.col`                                          |
| sm         | [TCol](#tcol)    |          | false   | `.col-sm`                                       |
| md         | [TCol](#tcol)    |          | false   | `.col-md`                                       |
| lg         | [TCol](#tcol)    |          | false   | `.col-lg`                                       |
| xl         | [TCol](#tcol)    |          | false   | `.col-xl`                                       |
| xxl        | [TCol](#tcol)    |          | false   | `.col-xxl`                                      |
| as         | elementType      |          | `"div"` | You can use a custom element for this component |

### TCol
```tsx
export type TCol = number | true | 'auto' | undefined;
```



### The distribution cannot be divided

What if you want 5 items in a column? You can use the features of CSS IN JS here and use decimals, but I recommend using formulas instead of calculating by yourself.

```tsx
<Container>
    <Row>
        <Col col={12/5}>col 1</Col>    
        <Col col={12/5}>col 2</Col>    
        <Col col={12/5}>col 3</Col>    
        <Col col={12/5}>col 4</Col>    
        <Col col={12/5}>col 5</Col>    
    </Row>
</Container>
```


### extend

There are some extended usages, for example: if you want a slogan block to be displayed only within a few pixels, and then wrap if it exceeds 100%, then you can directly use Col

There is no Row, right?

```tsx
import {Container} from 'bear-react-grid';

<Container>
    <Col col={6}>
        <h1>Gird System following Bootstrap design</h1>
    </Col>
</Container>
```

### Refer

Equivalent to bootstrap `.col`, If you want to know more concepts, you can refer directly to [Bootstrap 5 Col](https://getbootstrap.com/docs/5.3/layout/grid/#auto-layout-columns)


