
# Base

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
| `.text-justify` | text align justify | `text-align: justify;` |
| `.bold` | font weight bold | `font-weight: bold;` |
| `.bolder` | font weight bolder | `font-weight: bolder;` |

## Cursor

| class name | define | equals |
| - | - | - |
| `.pointer` | cursor pointer | `cursor: pointer;` |
## Transition

```
# pub.config: 
transition-duration: `valueList.times`
transition-delay: `valueList.times`
```

| class name | define | equals |
| - | - | - |
| `.transition` | transition | `transition: all linear 150ms;` |
| `.transition.linear` | timing-function | `transition-timing-function: linear;` |
| `.transition.dr100` | duration | `transition-duration: 100ms;` |
| `.transition.dl100` | delay | `transition-delay: 100ms;` |

## Border

```
# pub.config: 
border-width: `valueList.borderWidth`
border-color: `valueList.color`
border-radius: `valueList.borderRadius`
```

| class name | define | equals |
| - | - | - |
| `.border` | border | `border: 1px solid #ddd;` |
| `.border.dotted` | border style | `border-style: dotted;` |
| `.bdw2` | border width | `border-width: 2px;` |
| `.bdc7` | border color | `border-color: #777;` |
| `.bdr999` | border radius | `border-radius: 999px;` |

# Color

## Color

```
# pub.config: 
color: `valueList.color`
background-color: `valueList.color`
```
| class name | define | equals |
| - | - | - |
| `.c2` | color | `color: #222;` |
| `.bgcf8` | background color | `background-color: #f8f8f8;` |

# Space

## Box Space ( margin and padding )

Formal syntax

> . *postion* [ *direction* ] *value*

*postion*

- m -> margin
- p -> padding

*direction*

- l -> left
- r -> right
- t -> top
- b -> bottom
- x -> left right
- y -> top bottom

*value*

```
# pub.config: 
space: `valueList.boxSpace`
```

| class name | define | equals |
| - | - | - |
| `.m5` | margin 5px | `margin: 5px;` |
| `.ml8` | margin left 8px | `margin-left: 8px;` |
| `.px10` | padding horizontal 10px | `padding-left: 10px; padding-right: 10px;` |
| `.my15` | margin vertical 15px | `margin-top: 15px; margin-bottom: 15px;` |


## Box Side ( width and height )

```
# pub.config: 
side: `valueList.boxSide`
```

| class name | define | equals |
| - | - | - |
| `.w100` | width | `width: 100px;` |
| `.h60` | height | `height: 60px;` |

## Ratio ( width / height percentage ) 

```
# pub.config: 
ratio: `valueList.ratio`
```

| class name | define | equals |
| - | - | - |
| `.pct10` | width percentage | `width: 10%;` |
| `.hp10` | height percentage | `height: 10%;` |

# Typeset
## font-size

```
# pub.config: 
font-size: `valueList.fontSize`
```

| class name | define | equals |
| - | - | - |
| `.fz12` | font size | `font-size: 12px;` |

