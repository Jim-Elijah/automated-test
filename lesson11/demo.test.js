import { timers } from './demo.js'

beforeEach(() => {
  jest.useFakeTimers()
})

// test('timers 测试', () => {
//   timers(() => {
//     expect(1).toBe(1)
//   })
// })

// test('timers 测试', () => {
//   const fn = jest.fn()
//   timers(fn)
//   jest.runAllTimers()
//   expect(fn).toHaveBeenCalledTimes(1)
// })

// test('timers 测试', () => {
//   const fn = jest.fn()
//   timers(fn)
//   jest.runAllTimers()
//   expect(fn).toHaveBeenCalledTimes(2)
// })

// test('timers 测试', () => {
//   const fn = jest.fn()
//   timers(fn)
//   // 运行Pending timers
//   jest.runOnlyPendingTimers()
//   expect(fn).toHaveBeenCalledTimes(1)
// })


test('timers 测试', () => {
  const fn = jest.fn()
  timers(fn)
  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(1)
  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(2)
})

test('timers1 测试', () => {
  const fn = jest.fn()
  timers(fn)
  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(1)
  jest.advanceTimersByTime(3000)
  expect(fn).toHaveBeenCalledTimes(2)
})