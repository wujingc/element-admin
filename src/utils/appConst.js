
let BACKEND_DOMAIN = 'http://localhost:8101'
if (process.env.NODE_ENV === 'production') {
  BACKEND_DOMAIN = 'http://h5.limesoftware.cn'
} else if (process.env.NODE_ENV === 'development') {
  BACKEND_DOMAIN = 'http://localhost'
}
export default {
  BACKEND_DOMAIN
}
