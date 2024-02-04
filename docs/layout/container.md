---
sidebar_position: 1
tags:
  - Components
---

# Container

Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport.


```tsx
import {Container} from 'bear-react-grid';

<Container>
     {/*...ignore some */}
</Container>
```


## Props

| Props Name | Type                                                      | Required | Default | Description                                                        |
|------------|-----------------------------------------------------------|----------|--------|--------------------------------------------------------------------|
| style      | CSS.Properties                                            |          |        |                                                                    |
| className  | string                                                    |          |        |                                                                    |
| children   | ReactNode                                                 |          |        |                                                                    |
| fluid      | `true` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"xxl"` |          | `"sm"`  | Allow the Container to fill all of its available horizontal space. |
| as         | elementType                                               |          | `"div"` | You can use a custom element for this component                    |





### Fluid

| sizeName | Extra small<br/>\<576px | Small<br/>≥576px | Medium<br/>≥768px | Large<br/>≥992px | X-Large<br/>≥1200px | XX-Large<br/>≥1400px |
|----------|-------------------------|------------------|-------------------|------------------|---------------------|----------------------|
| sm       | 100%                    | 540px            | 720px             | 960px            | 1140px              | 1320px               |               
| md       | 100%                    | 100%             | 720px             | 960px            | 1140px              | 1320px               |                
| lg       | 100%                    | 100%             | 100%              | 960px            | 1140px              | 1320px               |               
| xl       | 100%                    | 100%             | 100%              | 100%             | 1140px              | 1320px               |               
| xxl      | 100%                    | 100%             | 100%              | 100%             | 100%                | 1320px               |               
| fluid    | 100%                    | 100%             | 100%              | 100%             | 100%                | 100%                 |               

You can change setting by [gridTheme](/docs/config)

### Refer

If you want to know more concepts, you can refer directly to [Bootstrap 5 Container](https://getbootstrap.com/docs/5.3/layout/containers/)

