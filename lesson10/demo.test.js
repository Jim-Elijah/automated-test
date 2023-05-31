jest.mock('./demo.js')

// fetchData 使用 __mocks__ 下的demo.js
import { fetchData } from './demo.js'

// getNumber 使用真实的demo.js
const { getNumber } = jest.requireActual('./demo.js')

test('fetchData 测试', () => {
  return fetchData().then(data => {
    expect(eval(data)).toEqual('123')
  })
})

test('getNumber 测试', () => {
  expect(getNumber()).toEqual(123)
})