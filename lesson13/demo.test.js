import $ from 'jquery'
import append2Body from './demo'

test('append2Body 测试', () => {
  append2Body()
  expect($('body').find('div').length).toEqual(1)
})
