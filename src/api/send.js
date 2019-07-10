import axios from './index'

export const sendInfo = ({ name, email}) => {
  return axios.request({
    url: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
    method: 'post',
    data: {
      name,
      email
    }
  })
}
