import axios from 'axios'

// export const fetchData = (fn) => {
//   return axios.get('http://www.dell-lee.com/react/api/demo.json').then(res => {
//     fn(res.data)
//   })
// }


export const fetchData = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo.json')
}