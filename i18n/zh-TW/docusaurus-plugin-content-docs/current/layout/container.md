---
sidebar_position: 6
tags:
  - Components
  - Grid System
---

# Container

容器是 Bootstrap 的基本建構區塊，在給定的設備或是視區中包含、填充和對齊你的內容

Bootstrap 本身自帶三種不同的容器：

- 預設每一個響應式斷點都會設置一個 max-width
- `fluid`, 所有斷點都是 `width: 100%`
- `fluid-{breakpoint}`, 直到指定斷點之前，都會是 `width: 100%`

下表說明了每個容器的 `max-widt`h 與每個斷點處的原始 .container 和 .container-fluid 的比較。



使用響應式容器時將會保持在寬度 100%，直到達到指定斷點為止，接下來我們將針對每個較高的斷點設置 `max-width`。例如，`fluid="sm"` 在到達 `sm` 斷點之前的寬度都為 100％，之後它將以 md、lg、xl 和 xxl 設置。




```tsx
import {Container} from 'bear-react-grid';

<Container>
     {/*...ignore some */}
</Container>
```


## Props

| Props Name | Type                                                      | Required | Default    | Description                                                        |
|------------|-----------------------------------------------------------|----------|------------|--------------------------------------------------------------------|
| style      | CSS.Properties                                            |          |            |                                                                    |
| className  | string                                                    |          |            |                                                                    |
| children   | ReactNode                                                 |          |            |                                                                    |
| fluid      | `true` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"xxl"` |          | `"sm"`  | Allow the Container to fill all of its available horizontal space. |
| as         | elementType                                               |          | `"div"`    | You can use a custom element for this component                    |





### Fluid

| sizeName | Extra small<br/>\<576px | Small<br/>≥576px | Medium<br/>≥768px | Large<br/>≥992px | X-Large<br/>≥1200px | XX-Large<br/>≥1400px |
|----------|-------------------------|------------------|-------------------|------------------|---------------------|----------------------|
| sm       | 100%                    | 540px            | 720px             | 960px            | 1140px              | 1320px               |               
| md       | 100%                    | 100%             | 720px             | 960px            | 1140px              | 1320px               |                
| lg       | 100%                    | 100%             | 100%              | 960px            | 1140px              | 1320px               |               
| xl       | 100%                    | 100%             | 100%              | 100%             | 1140px              | 1320px               |               
| xxl      | 100%                    | 100%             | 100%              | 100%             | 100%                | 1320px               |               
| fluid    | 100%                    | 100%             | 100%              | 100%             | 100%                | 100%                 |               

你可以更改設定於 [gridTheme](/docs/config)


### 參考

等同於 bootstrap 的 `.container`

如果想了解更多概念可以直接參考 [Bootstrap 5 Container](https://getbootstrap.com/docs/5.3/layout/containers/)
