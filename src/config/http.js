import axios from 'axios';

axios.interceptors.response.use(
  function (response) {
    return {
      code: 200,
      data: response.data
    };
  },
  function (error) {
    return Promise.reject({
      code: error.response ? error.response.status : 500,
      data: error.response ? error.response.data : '发生错误'
    })
  },
);