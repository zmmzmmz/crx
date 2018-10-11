document.addEventListener('DOMContentLoaded', function () {
  fetchWeather()
})

function fetchWeather () {
  request({
    url: 'http://www.sojson.com/open/api/weather/json.shtml?city=%E6%9D%AD%E5%B7%9E',
    method: 'GET'
  }).then(data => {
    data = JSON.parse(data)
    if (!data) {
      document.getElementById('container').innerHTML = '天气加载失败...请重试'
      return
    }
    return Promise.resolve(data)
  })
}
