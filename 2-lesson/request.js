// Promisifying XMLHttpRequest

let request = option => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(option.method || 'GET', option.url);
    if (option.headers) {
      Object.keys(option.headers).forEach(key => {
        xhr.setRequestHeader(key, option.headers[key])
      })
    }
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    }
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(option.body);
  })
}
