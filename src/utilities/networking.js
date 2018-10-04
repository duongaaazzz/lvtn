/**
 * Created by Duong Le on 9/16/18.
 */


function timeout(request, duration, api) {
  return new Promise((resolve, reject) => {
    let timeout = setTimeout(() => {
      resolve({data: null})
      alert('Request timeout' + api)
    }, duration)

    request.then(res => {
      clearTimeout(timeout);
      timeout = null;
      resolve(res);
    }, err => {
      clearTimeout(timeout);
      timeout = null;
      resolve({data: null});
    });
  });
}

export function getWithTimeout(api, headers) {
  console.log('getWithTimeout');
  return timeout(get(api, headers), 60000, api)
}

export function get(api, headers) {

  return fetch(api, {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers
    }
  }).then(response => {
    console.log(response)
    return response.json().then(data => {
      console.log(data)
      return data
    })
  }).catch(err => {
    console.log('There is an error occurred while requesting api', err, api)
    return {data: null}
  })
}

export function postWithTimeout(api, headers, body) {
  console.log('postWithTimeout')
  return timeout(post(api, headers, body), 60000, api)
}

export function post(api, headers, body) {
  if (typeof (body) === 'object' && body.constructor !== FormData)
    body = JSON.stringify(body)

  let heads = {}
  if (headers['Content-Type'])
    heads = {
      ...headers,
      'Accept': 'application/json',
    }
  else
    heads = {
      ...headers,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }

  return fetch(api, {
    method: 'post',
    headers: heads,
    body: body
  }).then(response => {
    console.log(response)
    return response.json().then(data => {
      return data
    })
  }).catch(err => {
    console.log('There is an error occurred while requesting api', err, api)
    return {data: null}
  })
}
export function  deleteWithTimeout(api, headers, body) {
  console.log('deleteWithTimeout');
  return timeout(_delete(api, headers, body), 30000, api);
}

export function _delete(api, headers, body){
  if (typeof (body) === 'object' && body.constructor !== FormData)
    body = JSON.stringify(body)


  let heads = {}
  if (headers['Content-Type'])
    heads = {
      ...headers,
      'Accept': 'application/json'
    }
  else
    heads = {
      ...headers,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

  return fetch(api, {
    method: 'delete',
    headers: heads,
    body: body
  }).then(response => {
    console.log(response)
    return response.json().then(data => {
      console.log(data)
      return data
    })
  }).catch(err => {
    console.log('There is an error occurred while requesting api', err, api)
    return { data: null }
  })

}

export function putWithTimeout(api, headers, body) {
  console.log('putWithTimeout');
  return timeout(put(api, headers, body), 30000, api);
}

export function put(api, headers, body) {
  if (typeof (body) === 'object' && body.constructor !== FormData)
    body = JSON.stringify(body)


  let heads = {}
  if (headers['Content-Type'])
    heads = {
      ...headers,
      'Accept': 'application/json'
    }
  else
    heads = {
      ...headers,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

  return fetch(api, {
    method: 'put',
    headers: heads,
    body: body
  }).then(response => {
    console.log(response)
    return response.json().then(data => {
      console.log(data)
      return data
    })
  }).catch(err => {
    console.log('There is an error occurred while requesting api', err, api)
    return {data: null}
  })
}
