A simple CSS style toolkit that helps you build pages easily


English | [中文](./README.zh.md)

Useage：

- For Less

```less
@import '~pub.css/less/index.less';
```

- For Scss

```scss
@import '~pub.css/scss/index.scss';
```


## Base

<details><summary><strong>Layout</strong></summary>

| class name | define | equals |
| - | - | - |
| `.flex ` | the flex box | [display: flex;](#flex) |
| `.flex.around` | space around| `justify-content: space-around;` |
| `.flex.center` | center | `justify-content: center;` |
| `.flex.start` | start | `justify-content: flex-start;` |
| `.flex.end` | end | `justify-content: flex-end;` |
| `.flex.top` | top | `align-items: flex-start;` |
| `.flex.bottom` | bottom | `align-items: flex-end;` |
| `.block` | display block | `display: block;` |
| `.inline-block` | inline block | `display: inline-block;` |
| `.align-top` | vertical top | `vertical-align: top;` |
| `.auto` | margin auto | `margin: auto;` |


### .flex
```css
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
```
</details>

<details><summary><strong>Image</strong></summary>

| class name | define | equals |
| - | - | - |
| `.img-cover` | image cover | `object-fit: cover;` |
| `.img-contain` | image contain | `object-fit: contain;` |

</details>

<details><summary><strong>Text</strong></summary>

| class name | define | equals |
| - | - | - |
| `.center` | text align center | `text-align: center;` |
| `.text-right` | text align right | `text-align: right;` |
| `.text-justify` | text align justify | `text-align: justify;` |
| `.bold` | font weight bold | `font-weight: bold;` |
| `.bolder` | font weight bolder | `font-weight: bolder;` |

</details>

<details><summary><strong>Cursor</strong></summary>

| class name | define | equals |
| - | - | - |
| `.pointer` | cursor pointer | `cursor: pointer;` |

</details>


## Color

<details><summary><strong>Color</strong></summary>

value list
```js
[1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f, e8, f0, f2, f8, fa]
```

| class name | define | equals |
| - | - | - |
| `.c2` | color #222 | `color: #222;` |
| `.bgcf8` | background color #f8f8f8 | `background-color: #f8f8f8;` |
| `.bdcf8` | border color #f8f8f8 | `border-color: #f8f8f8` |

</details>

## Space

<details><summary><strong>margin and padding</strong></summary>

Formal syntax

> . *side* [ *direction* ] *value*

*side*

- m -> margin
- p -> padding

*direction*

- l -> left
- r -> right
- t -> top
- b -> bottom
- x -> left right
- y -> top bottom

value list
```js
[0, 1, 5, 8, 10, 15, 20, 25, 30, 40, 45, 50, 60, 70, 80, 100, 150, 200]
```

| class name | define | equals |
| - | - | - |
| `.m5` | margin 5px | `margin: 5px;` |
| `.ml8` | margin left 8px | `margin-left: 8px;` |
| `.px10` | padding horizontal 10px | `padding-left: 10px; padding-right: 10px;` |
| `.my15` | margin vertical 15px | `margin-top: 15px; margin-bottom: 15px;` |

</details>

<details><summary><strong>width and height</strong></summary>

value list
```js
[40, 60, 50, 70, 80, 90, 100, 120, 140, 150, 160, 170, 180, 200, 220, 240, 250, 260, 270, 300, 320, 350, 400]
```

| class name | define | equals |
| - | - | - |
| `.w100` | width | `width: 100px;` |
| `.h60` | height | `height: 60px;` |

</details>

<details><summary><strong>width percentage</strong></summary>

value list
```js
[10, 15, 20, 25, 33, 46, 49, 50, 60, 64, 66, 75, 80, 85, 90, 100]
```

| class name | define | equals |
| - | - | - |
| `.pct10` | width percentage | `width: 10%;` |

</details>

<details><summary><strong>border radius</strong></summary>

value list
```js
[2, 4, 6, 8, 10, 999]
```

| class name | define | equals |
| - | - | - |
| `.bdr999` | border radius | `border-radius: 999px;` |

</details>

## Typeset

<details><summary><strong>font size</strong></summary>

value list
```js
[12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32, 36, 40, 50, 60, 70, 80]
```

| class name | define | equals |
| - | - | - |
| `.fz12` | font size | `font-size: 12px;` |

</details>
