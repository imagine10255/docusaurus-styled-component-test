---
sidebar_position: 5
tags:
  - Breakpoints
  - Media Query
  - RWD
---

# 斷點
響應式RWD斷點樣式設定

```
const Box = styled.div`
    display: none;

    ${media.xl`
        display: flex;
    `}
`;
```



:::tip Tip
但是如果IDE無法檢查CSS樣式錯誤怎麼辦？

***你可以安裝 `Webstorm` / [`Styled Component & Styled JSX`](https://plugins.jetbrains.com/plugin/9997-styled-components--styled-jsx) plugins***

:::

## Webstorm 

搜尋 `Plugins` 並且 `Install` 
<img src="/img/ide/webstorm-plugins.png" width="800" alt="Webstorm Plugins"/>

> in Languages & Frameworks > Javascript > Styled Components

新增 `media`

<img src="/img/ide/webstorm-styled-component.png" width="800" alt="Webstorm Styled Compoennt"/>

然後確認一下

<img src="/img/ide/webstorm-jsx.png" width="400" alt="Webstorm JSX"/>

