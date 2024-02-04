---
sidebar_position: 3
tags:
  - Components
  - Grid System
---

# Col

用來分配區塊佔比的元件


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


:::caution Suggestion

Col 本身並不包含 左右 padding，因為 Row 是透過 CSS 選取器，與 Col 無關

這樣的好處可以讓 Col 與 Row 脫鉤，讓他更專注負責在 分配區塊 %

:::

## Props


| Props Name | Type           | Required | Default | Description |
|------------|----------------| -------- |---------|-------------|
| style      | CSS.Properties |          |         |             |
| className  | string         |          |         |             |
| children   | ReactNode      |          |         |             |
| col        | [TCol](#tcol)  |          | false   | `.col`      |
| sm         | [TCol](#tcol)  |          | false   | `.col-sm`   |
| md         | [TCol](#tcol)  |          | false   | `.col-md`   |
| lg         | [TCol](#tcol)  |          | false   | `.col-lg`   |
| xl         | [TCol](#tcol)  |          | false   | `.col-xl`   |
| xxl        | [TCol](#tcol)  |          | false   | `.col-xxl`  |
| as         | elementType                         |          | `"div"` | You can use a custom element for this component                    |


### TCol
```tsx
export type TCol = number | true | 'auto' | undefined;
```

### 分配除不盡

如果你想要5個項目一列怎麼辦 ? 這邊可以利用 CSS IN JS 的特性，可使用小數，但我建議使用公式的方式，不要自己算

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


### 延伸

有一些延伸的用法，例如：某個標語區塊，你希望他只在幾 px 內顯示，超過則換行，並非 100%，那麼你就可以直接用 Col

沒有 Row 對吧?

```tsx
import {Container} from 'bear-react-grid';

<Container>
    <Col col={6}>
        <h1>Gird System following Bootstrap design</h1>
    </Col>
</Container>
```


### Refer

等同於 bootstrap 的 `.col`， 如果想了解更多概念可以直接參考 [Bootstrap 5 Col](https://getbootstrap.com/docs/5.3/layout/grid/#auto-layout-columns)

