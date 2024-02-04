---
slug: frontend-slicing-rule
title: Frontend Slicing Rule
authors: imaginechiu
tags: [CSS Design]
---

Front-end design and development, including design and development

## Over-reliance on content, static hard-coded layout

- Highly written to death
- Padding

Because the design draft is dead, in the case of an unstandardized design draft, we should continue with the front-end specification, or the first version of the design specification.
You shouldn’t just follow it without specifications. “Responsive design” considers not just different displays in different sizes, but “adaptation to space.”
Regardless of whether designers today start from the perspective of graphic design, we should all think about "responsive design" as the starting point.

`One of the biggest problems is "over-reliance on content"`

#### Text modification, changes, and text lengths in different languages ​​are calculated just right, with one height setting for each size (xs, sm, md, lg, xl, xxl)

> Should high-height content be stretched or overflow characters?

#### Write down the width and height, each Padding, Margin according to the design draft, and set it carefully according to each size (xs, sm, md, lg, xl, xxl each setting)

> The common settings are recognized, the design draft will not be moved, and the `macro adjustment example` should not become only xs -> md -> xxl

#### Regardless of the full page, the width should be expanded by the content, and the width should be written directly. According to the design draft, each size should be carefully set.

> Identify whether it is full version or content expanded height + Padding

#### Project card list, if the project is added, calculate the number of pixels

> 100px cut into 4 equal parts should be 25%, not 25px


## Margin and Padding

The interval between items is Margin

> Uniformly use the margin-bottom principle to open the bottom and how much space should be separated

Tweens within the project, for Padding

> Since we occasionally encounter padding in design, but specific elements are full, it is recommended to set padding between each block instead of setting padding for a large block, and this padding is a fixed CSS parameter. set up


## If possible, it doesn’t matter if you have one more layer. Don’t just think about copying.

Sometimes cutting the front-end design into layout layer and style layer is of great help for subsequent maintenance, reading and adjustment.
Allows you to directly separate categories in your vision

#### As for the naming issue, namespace

There is no BEM naming problem when using Styled-component because it will do BEM for you.
This naming issue also involves clearly defining the dom structure,

Container is Container, Grid is Grid,
Component splitting makes it easier for us to name separate spaces.

For example:

Title and Desc are almost everywhere. If the namespace is not split, they will be ProductTitle and GoodsTitle.


## No matter what, there must be a grid system and ZIndex principle

You need to have a system responsible for typesetting, whether it is a boostrap grid system or a tailwind grid system. As long as all customization is not blind, "I want it to be the same as the design draft"
