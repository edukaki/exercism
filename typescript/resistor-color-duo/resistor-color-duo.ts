export function decodedValue(colors: (string)[]): number {
  let resistorValue = ''
  colors.forEach(function callback(color, index) {
    index < 2 ? resistorValue += indexOfColor(color) : ''
  })
  return Number(resistorValue)
}

function indexOfColor(color: string): string {
  const colorArr = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
  let value: string = ''

  colorArr.forEach(function callback(eachColor, index) {
    if (color === eachColor) {
      value = index.toString()
    }
  })

  return value
}