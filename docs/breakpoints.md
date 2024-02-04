---
sidebar_position: 6
tags:
  - Breakpoints
  - Media Query
  - RWD
---

# Breakpoints
Grid layout related settings

```
const Box = styled.div`
    display: none;

    ${media.xl`
        display: flex;
    `}
`;
```



:::tip Tip
But what should I do if the IDE cannot check CSS style errors?

***You can install `Webstorm` / [`Styled Component & Styled JSX`](https://plugins.jetbrains.com/plugin/9997-styled-components--styled-jsx) plugins***

:::

## Webstorm 

Search `Plugins` and `Install` 
<img src="/img/ide/webstorm-plugins.png" width="800" alt="Webstorm Plugins"/>

> in Languages & Frameworks > Javascript > Styled Components

add `media`

<img src="/img/ide/webstorm-styled-component.png" width="800" alt="Webstorm Styled Compoennt"/>

then check!

<img src="/img/ide/webstorm-jsx.png" width="400" alt="Webstorm JSX"/>

