// export const timers = (cb) => {
//   setTimeout(() => {
//     cb()
//   }, 3000);
// }

export const timers = (cb) => {
  setTimeout(() => {
    cb()
    setTimeout(() => {
      cb()
    }, 3000);
  }, 3000);
}