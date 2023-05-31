// 匹配器
// test('toBe', () => {
//   expect(6).toBe(6)
// })

// test('toBeUndefined', () => {
//   let a = undefined
//   expect(a).toBeUndefined()
// })

// test('toBeNull', () => {
//   let a = null
//   expect(a).toBeNull()
// })

// test('toBeDefined', () => {
//   let a = null
//   expect(a).toBeDefined()
// })

test('toBeTruthy', () => {
  let a = 1
  expect(a).toBeTruthy()
})

test('toBeFalsy', () => {
  let a = 0
  expect(a).toBeFalsy()
})

test('not', () => {
  let a = 1
  expect(a).not.toBeFalsy()
})
