A simple CSS style toolkit that helps you build pages easily


English | [中文](./README.zh.md)

Useage：

## Layout

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

## Image

| class name | define | equals |
| - | - | - |
| `.img-cover` | image cover | `object-fit: cover;` |
| `.img-contain` | image contain | `object-fit: contain;` |


## Text

| class name | define | equals |
| - | - | - |
| `.center` | text align center | `text-align: center;` |
| `.text-right` | text align right | `text-align: right;` |
| `.bold` | font weight bold | `font-weight: bold;` |
| `.bolder` | font weight bolder | `font-weight: bolder;` |


## Cursor

| class name | define | equals |
| - | - | - |
| `.pointer` | cursor pointer | `cursor: pointer;` |
