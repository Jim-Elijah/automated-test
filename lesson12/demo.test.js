jest.mock('./util')

import Util from './util'
import demoFunction from './demo'

// 单元测试, 不关心Util.a Util.b结果，关注是否调用
test('demoFunction 测试', () => {
  demoFunction()
  expect(Util).toHaveBeenCalled()
  expect(Util.mock.instances[0].a).toHaveBeenCalled()
  expect(Util.mock.instances[0].b).toHaveBeenCalled()
})
