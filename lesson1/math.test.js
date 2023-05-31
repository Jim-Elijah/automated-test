var result = add(3, 3)
var expected = 6
if (result !== expected) {
  throw new Error(`3 + 3 应该等于 ${expected}, 实际结果却是 ${result} `)
}

var result = minus(3, 3)
var expected = 0
if (result !== expected) {
  throw new Error(`3 - 3 应该等于 ${expected}, 实际结果却是 ${result} `)
}

function test(description, fn) {
  try {
    fn()
    console.log(`${description} 通过测试`)
  } catch (e) {
    console.error(`${description} 没有通过测试 ${e}`)
  }
}


function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`实际值和预期值不相等 预期${expected} 实际却是${result} `)
      }
    }
  }
}

// expect(add(3,3)).toBe(6)
// expect(minus(3,3)).toBe(0)

test('测试加法 3 + 3', () => {
  expect(add(3, 3)).toBe(6)
})

test('测试减法 3 - 3', () => {
  expect(minus(3, 3)).toBe(0)
})

test('测试乘法 3 * 3', () => {
  expect(multi(3, 3)).toBe(9)
})