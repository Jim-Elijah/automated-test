import Counter from './Counter.js'

describe('测试 Counter 相关代码', () => {
  let counter = null

  beforeAll(() => {
    console.log('beforeAll')
  })

  beforeEach(() => {
    console.log('beforeEach')
    counter = new Counter()
  })

  afterEach(() => {
    console.log('afterEach')
  })

  afterAll(() => {
    console.log('afterAll')
  })

  describe('测试 增加 相关代码', () => {
    test('测试 Counter 中的 addOne 方法', () => {
      console.log('测试 Counter 中的 addOne 方法')
      counter.addOne()
      expect(counter.number).toBe(1)
    })
    test('测试 Counter 中的 addTwo 方法', () => {
      console.log('测试 Counter 中的 addTwo 方法')
      counter.addTwo()
      expect(counter.number).toBe(2)
    })
  })

  describe('测试 减少 相关代码', () => {
    test('测试 Counter 中的 minusOne 方法', () => {
      console.log('测试 Counter 中的 minusOne 方法')
      counter.minusOne()
      expect(counter.number).toBe(-1)
    })
    test('测试 Counter 中的 minusTwo 方法', () => {
      console.log('测试 Counter 中的 minusTwo 方法')
      counter.minusTwo()
      expect(counter.number).toBe(-2)
    })
  })
})