import { add, minus, multi, } from './math.js'

test('测试加法 3 + 3', () => {
  expect(add(3, 3)).toBe(6)
})

test('测试减法 3 - 3', () => {
  expect(minus(3, 3)).toBe(0)
})

test('测试乘法 3 * 3', () => {
  expect(multi(3, 3)).toBe(9)
})

// jest可做单元测试（模块测试）、集成测试（多个模块测试）


// npm run jest
// jest 集成了（babel-jest）
// 查找babel 或 babel-core
// 取，babelrc配置
// 在远行测试之前，结合babel，先把你的代码做一次转化
// 运行转化过的测试用例代码