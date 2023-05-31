// 该文件不是必要，补充jest.mock('./util')做精细化控制
const Util = jest.fn(() => {
  console.log('constructor')
})
Util.prototype.a = jest.fn(() => {
  console.log('a')
})
Util.prototype.b = jest.fn(() => {
  console.log('b')
})

export default Util