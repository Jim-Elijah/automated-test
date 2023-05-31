import axios from 'axios'

export const fetchData = () => {
  return axios.get('/').then(res => res.data)
}
// 假设 返回下面内容
// `(function(){return '123'})()`

export const getNumber = () => {
  return 123
}