export const minify = str => {
  const replaceList = [
    [/ 0\./ig, ' .'],
    [/ 0(px|%|em|rem)/ig, ' 0'],
    [/[ \n\r\t]+/ig, ' '],
    [/ ?(\{|\}|\;|\:|\,) ?/ig, (a, b) => b],
  ]
  for (let x of replaceList) {
    str = str.replace(x[0], x[1])
  }
  return str
}