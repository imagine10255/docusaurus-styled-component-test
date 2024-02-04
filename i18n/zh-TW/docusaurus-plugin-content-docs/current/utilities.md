---
sidebar_position: 4
tags:
  - CSS
  - Breakpoints
  - RWD
---

# 公用

:::tip Tip

除了使用元件之外，建議適度使用公用樣式，以加快開發速度。但是不要像是 `Tailwind` 這麼雜，取一個平衡點

這些樣式是從 `Bootstrap 5` 中提取的。

:::



## One size


### Image

```css
.img-fluid {
    max-width: 100%; 
    height: auto;
}
.img-cover {
    width: 100%;
    object-fit: cover;
}
```

### Border

```css
.border {border: var(--bear-border-width) var(--bear-border-style) var(--bear-border-color)}
.border-top {border-top: var(--bear-border-width) var(--bear-border-style) var(--bear-border-color)}
.border-right {border-right: var(--bear-border-width) var(--bear-border-style) var(--bear-border-color)}
.border-bottom {border-bottom: var(--bear-border-width) var(--bear-border-style) var(--bear-border-color)}
.border-left {border-left: var(--bear-border-width) var(--bear-border-style) var(--bear-border-color)}
```

### Rotate

```css
.rotate-90 {transform: rotate(90deg)}
.rotate-180 {transform: rotate(180deg)}
.rotate-270 {transform: rotate(270deg)}
```

### Text Overflow

```css
.text-area-overflow{
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: var(--overflow-line, 2);
    -webkit-box-orient: vertical;
}
.text-area-overflow-3{--overflow-line: 3}
.text-area-overflow-4{--overflow-line: 4}
.text-area-overflow-5{--overflow-line: 5}
.text-overflow{white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

### Filter

```css
.filter-gray {filter: grayscale(1)}
.filter-while {filter: brightness(0) invert(1)}
.filter-mask-b{mask-image: linear-gradient(to bottom, white, white, transparent)}
```

### Font Size

```css
.fs-1 {font-size: 2.5rem}
.fs-2 {font-size: 2rem}
.fs-3 {font-size: 1.75rem}
.fs-4 {font-size: 1.5rem}
.fs-5 {font-size: 1.25rem}
.fs-6 {font-size: 1rem}
```


#### Visible

```css
.visible {visibility: visible}
.invisible {visibility: hidden}
```







## Supports Break (RWD)


支持不同的 `斷點` 設定，像是這樣：

| ClassName  | Desc        |
|-------------|-------------|
| .d-flex     | Extra small |
| .d-sm-flex  | Small       |
| .d-md-flex  | Medium      |
| .d-lg-flex  | Large       |
| .d-xl-flex  | X-Large     |
| .d-xxl-flex | XX-Large    | 




### Display


```css
.d-none {display: none}
.d-inline {display: inline}
.d-inline-block {display: inline-block}
.d-block {display: block}
.d-flex {display: flex}
.d-inline-flex {display: inline-flex}
.d-grid {display: grid}
.d-inline-grid {display: inline-grid}
```



### Position

```css
.position-static {position: static}
.position-relative {position: relative}
```


### Grid Flow

```css
.grid-flow-col {grid-auto-flow: column}
.grid-flow-row {grid-auto-flow: row}
.grid-flow-dense {grid-auto-flow: dense}
.grid-flow-row-dense {grid-auto-flow: row dense}
.grid-flow-col-dense {grid-auto-flow: column dense}
```





### Flex Direction

```css
.flex-row {flex-direction: row}
.flex-column {flex-direction: column}
.flex-row-reverse {flex-direction: row-reverse}
.flex-column-reverse {flex-direction: column-reverse}
```

### Flex Wrap

```css
.flex-wrap {flex-wrap: wrap}
.flex-nowrap {flex-wrap: nowrap}
.flex-wrap-reverse {flex-wrap: wrap-reverse}
```


### Flex

```css
.flex-fill {flex: 1 1 auto}
.flex-grow-0 {flex-grow: 0}
.flex-grow-1 {flex-grow: 1}
.flex-shrink-0 {flex-shrink: 0}
.flex-shrink-1 {flex-shrink: 1}
```



### Flex Alignment
```css
.justify-content-auto {justify-content: normal}
.justify-content-start {justify-content: flex-start}
.justify-content-end {justify-content: flex-end}
.justify-content-center {justify-content: center}
.justify-content-between {justify-content: space-between}
.justify-content-around {justify-content: space-around}
.justify-items-start {justify-items: flex-start}
.justify-items-end {justify-items: flex-end}
.justify-items-center {justify-items: center}
.justify-items-stretch {justify-items: stretch}

.justify-self-auto {justify-self: auto}
.justify-self-start {justify-self: flex-start}
.justify-self-center {justify-self: center}
.justify-self-end {justify-self: flex-end}

.align-items-auto {align-items: normal}
.align-items-start {align-items: flex-start}
.align-items-end {align-items: flex-end}
.align-items-center {align-items: center}
.align-items-baseline {align-items: baseline}
.align-items-stretch {align-items: stretch}
.align-content-start {align-content: flex-start}
.align-content-end {align-content: flex-end}
.align-content-center {align-content: center}
.align-content-between {align-content: space-between}
.align-content-around {align-content: space-around}
.align-content-stretch {align-content: stretch}

.align-self-auto {align-self: auto}
.align-self-start {align-self: flex-start}
.align-self-end {align-self: flex-end}
.align-self-center {align-self: center}
.align-self-baseline {align-self: baseline}
.align-self-stretch {align-self: stretch}

.place-items-auto {place-items: normal}
.place-items-start {place-items: start}
.place-items-end {place-items: end}
.place-items-center {place-items: center}
```




### Gird Col
```css
.g-col-1 {grid-column: auto/span 1}
.g-col-2 {grid-column: auto/span 2}
.g-col-3 {grid-column: auto/span 3}
.g-col-4 {grid-column: auto/span 4}
.g-col-5 {grid-column: auto/span 5}
```

### Gird Row
```css
.g-row-1 {grid-row: auto/span 1}
.g-row-2 {grid-row: auto/span 2}
.g-row-3 {grid-row: auto/span 3}
.g-row-4 {grid-row: auto/span 4}
.g-row-5 {grid-row: auto/span 5}
```



### Size

```css
.w-0{width: 0}
.w-100{width: 100%}
.w-auto {width: auto}
.h-inherit{width: inherit}

.h-0{height: 0}
.h-100{height: 100%}
.h-auto {height: auto}
.h-inherit{height: inherit}
```




### Text Align
```css
.text-justify {text-align: justify}
.text-left {text-align: left}
.text-right {text-align: right}
.text-center {text-align: center}
```



### Rounded
```css
.rounded {border-radius: .25rem}
.rounded-top {
    border-top-left-radius: var(--bear-border-radius);
    border-top-right-radius: var(--bear-border-radius);
}
.rounded-end {
    border-top-right-radius: var(--bear-border-radius);
    border-bottom-right-radius: var(--bear-border-radius);
}
.rounded-bottom {
    border-bottom-right-radius: var(--bear-border-radius);
    border-bottom-left-radius: var(--bear-border-radius);
}
.rounded-start {
    border-bottom-left-radius: var(--bear-border-radius);
    border-top-left-radius: var(--bear-border-radius);
}
.rounded-circle {border-radius: 50%}
.rounded-0 {border-radius: 0}
.rounded-1 {border-radius: var(--bear-border-radius-sm)}
.rounded-2 {border-radius: var(--bear-border-radius)}
.rounded-3 {border-radius: var(--bear-border-radius-lg)}
.rounded-4 {border-radius: var(--bear-border-radius-xl)}
.rounded-5 {border-radius: var(--bear-border-radius-xxl)}
.rounded-6 {border-radius: var(--bear-border-radius-2xl)}
```



### Margin

 ```css
.m-0 {margin: 0}
.mt-0, .my-0 {margin-top: 0}
.mr-0, .mx-0 {margin-right: 0}
.mb-0, .my-0 {margin-bottom: 0}
.ml-0, .mx-0 {margin-left: 0}
.m-1 {margin: var(--bear-spacer-1)}
.mt-1, .my-1 {margin-top: var(--bear-spacer-1)}
.mr-1, .mx-1 {margin-right: var(--bear-spacer-1)}
.mb-1, .my-1 {margin-bottom: var(--bear-spacer-1)}
.ml-1, .mx-1 {margin-left: var(--bear-spacer-1)}
.m-2 {margin: var(--bear-spacer-2)}
.mt-2, .my-2 {margin-top: var(--bear-spacer-2)}
.mr-2, .mx-2 {margin-right: var(--bear-spacer-2)}
.mb-2, .my-2 {margin-bottom: var(--bear-spacer-2)}
.ml-2, .mx-2 {margin-left: var(--bear-spacer-2)}
.m-3 {margin: var(--bear-spacer-3)}
.mt-3, .my-3 {margin-top: var(--bear-spacer-3)}
.mr-3, .mx-3 {margin-right: var(--bear-spacer-3)}
.mb-3, .my-3 {margin-bottom: var(--bear-spacer-3)}
.ml-3, .mx-3 {margin-left: var(--bear-spacer-3)}
.m-4 {margin: var(--bear-spacer-4)}
.mt-4, .my-4 {margin-top: var(--bear-spacer-4)}
.mr-4, .mx-4 {margin-right: var(--bear-spacer-4)}
.mb-4, .my-4 {margin-bottom: var(--bear-spacer-4)}
.ml-4, .mx-4 {margin-left: var(--bear-spacer-4)}
.m-5 {margin: var(--bear-spacer-5)}
.mt-5, .my-5 {margin-top: var(--bear-spacer-5)}
.mr-5, .mx-5 {margin-right: var(--bear-spacer-5)}
.mb-5, .my-5 {margin-bottom: var(--bear-spacer-5)}
.ml-5, .mx-5 {margin-left: var(--bear-spacer-5)}
.m-auto {margin: auto}
.mt-auto, .my-auto {margin-top: auto}
.mr-auto, .mx-auto {margin-right: auto}
.mb-auto, .my-auto {margin-bottom: auto}
.ml-auto, .mx-auto {margin-left: auto}
```



### Padding

```css
.p-0 {padding: 0}
.p-1 {padding: var(--bear-spacer-1)}
.p-2 {padding: var(--bear-spacer-2)}
.p-3 {padding: var(--bear-spacer-3)}
.p-4 {padding: var(--bear-spacer-4)}
.p-5 {padding: var(--bear-spacer-5)}

.pt-0, .py-0 {padding-top: 0}
.pb-0, .py-0 {padding-bottom: 0}
.pt-1, .py-1 {padding-top: var(--bear-spacer-1)}
.pb-1, .py-1 {padding-bottom: var(--bear-spacer-1)}
.pt-2, .py-2 {padding-top: var(--bear-spacer-2)}
.pb-2, .py-2 {padding-bottom: var(--bear-spacer-2)}
.pt-3, .py-3 {padding-top: var(--bear-spacer-3)}
.pb-3, .py-3 {padding-bottom: var(--bear-spacer-3)}
.pt-4, .py-4 {padding-top: var(--bear-spacer-4)}
.pb-4, .py-4 {padding-bottom: var(--bear-spacer-4)}
.pt-5, .py-5 {padding-top: var(--bear-spacer-5)}
.pb-5, .py-5 {padding-bottom: var(--bear-spacer-5)}

.pl-0, .px-0 {padding-left: 0}
.pr-0, .px-0 {padding-right: 0}
.pl-1, .px-1 {padding-left: var(--bear-spacer-1)}
.pr-1, .px-1 {padding-right: var(--bear-spacer-1)}
.pl-2, .px-2 {padding-left: var(--bear-spacer-2)}
.pr-2, .px-2 {padding-right: var(--bear-spacer-2)}
.pl-3, .px-3 {padding-left: var(--bear-spacer-3)}
.pr-3, .px-3 {padding-right: var(--bear-spacer-3)}
.pl-4, .px-4 {padding-left: var(--bear-spacer-4)}
.pr-4, .px-4 {padding-right: var(--bear-spacer-4)}
.pl-5, .px-5 {padding-left: var(--bear-spacer-5)}
.pr-5, .px-5 {padding-right: var(--bear-spacer-5)}
```




### Gap

```css
.gap-0, .gap-column-0  {column-gap: 0}
.gap-0, .gap-row-0 {row-gap: 0}
.gap-1, .gap-column-1 {column-gap: var(--bear-spacer-1)}
.gap-1, .gap-row-1 {row-gap: var(--bear-spacer-1)}
.gap-2, .gap-column-2 {column-gap: var(--bear-spacer-2)}
.gap-2, .gap-row-2 {row-gap: var(--bear-spacer-2)}
.gap-3, .gap-column-3 {column-gap: var(--bear-spacer-3)}
.gap-3, .gap-row-3 {row-gap: var(--bear-spacer-3)}
.gap-4, .gap-column-4 {column-gap: var(--bear-spacer-4)}
.gap-4, .gap-row-4 {row-gap: var(--bear-spacer-4)}
.gap-5, .gap-column-5 {column-gap: var(--bear-spacer-5)}
.gap-5, .gap-row-5 {row-gap: var(--bear-spacer-5)}
```



### Gutter
```css
.g-0, .gy-0 {--bear-gutter-y: 0}
.g-0, .gx-0 {--bear-gutter-x: 0}
.g-1, .gy-1 {--bear-gutter-y: var(--bear-gutter-1)}
.g-1, .gx-1 {--bear-gutter-x: var(--bear-gutter-1)}
.g-2, .gy-2 {--bear-gutter-y: var(--bear-gutter-2)}
.g-2, .gx-2 {--bear-gutter-x: var(--bear-gutter-2)}
.g-3, .gy-3 {--bear-gutter-y: var(--bear-gutter-3)}
.g-3, .gx-3 {--bear-gutter-x: var(--bear-gutter-3)}
.g-4, .gy-4 {--bear-gutter-y: var(--bear-gutter-4)}
.g-4, .gx-4 {--bear-gutter-x: var(--bear-gutter-4)}
.g-5, .gy-5 {--bear-gutter-y: var(--bear-gutter-5)}
.g-5, .gx-5 {--bear-gutter-x: var(--bear-gutter-5)}
```



### Flex Order

 ```css
.order-0{order: 0}
.order-1{order: 1}
.order-2{order: 2}
.order-3{order: 3}
.order-4{order: 4}
.order-5{order: 5}
.order-first{order: -1}
.order-last{order: 6}
```




### Overflow

```css
.overflow-initial{overflow: initial}
.overflow-hidden{overflow: hidden}
.overflow-auto{overflow: auto}
.overflow-scroll{overflow: scroll}

.overflow-x-initial{overflow-x: initial}
.overflow-x-hidden{overflow-x: hidden}
.overflow-x-auto{overflow-x: auto}
.overflow-x-scroll{overflow-x: scroll}

.overflow-y-initial{overflow-y: initial}
.overflow-y-hidden{overflow-y: hidden}
.overflow-y-auto{overflow-y: auto}
.overflow-y-scroll{overflow-y: scroll}
```



