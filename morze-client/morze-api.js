const getAllUsers = async () => {
  const url='http://localhost:3001/users';
  const users = fetch(url)
    .then(data => {return data.json()})
    .then(res => {return res})
    .catch(err => {console.log('err', err)});
  return users;
}

const login = async (username, password) => {
  const url='http://localhost:3001/auth/login';
  const fetchParams = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      username,
      password
    })
  }
  const user = fetch(url, fetchParams)
    .then(data => {return data.json()})
    .then(res => {return res})
    .catch(err => {console.log('err', err)});
  return user;
}

const validateMorse = async (str) => {
  const url='http://localhost:3001/morse/validate';
  const fetchParams = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      str
    })
  }
  const isValidate = fetch(url, fetchParams)
    .then(data => {return data.json()})
    .then(res => {return res})
    .catch(err => {console.log('err', err)});
  return isValidate;
}

const decode = async (str) => {
  const url='http://localhost:3001/morse/decode';
  const fetchParams = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      str
    })
  }
  const decodeStr = fetch(url, fetchParams)
    .then(data => {return data.json()})
    .then(res => {return res})
    .catch(err => {console.log('err', err)});
  return decodeStr;
}


const parseToken = (access_token) => JSON.parse(atob(access_token.split('.')[1]));;