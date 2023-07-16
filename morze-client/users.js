const users = document.getElementById('users');


const email = document.getElementById('username')
const password = document.getElementById('password')
const error = document.getElementById('login-error')
const createUsersList = async () => {
  const list = await getAllUsers();

  const ownUserId = getOwnUserId();
  list.map((item) => {
    if(ownUserId !== item._id) {
      users.appendChild(buildUserElement(item));
    }
  })
}

const buildUserElement = (user) => {
  const option = document.createElement("option");
  option.text = user.username;
  option.value = user._id;
  return option;
}

const handleLogin = async () => {
  if(!email.value || !password.value) {
    error.style.display = "block"
    return false;
  }
  const res = await login(email.value, password.value);
  console.log('res', res);
  if(!res.access_token) {
    error.style.display = "block"
    return false;
  } else {
    error.style.display = "none"
  }
  localStorage.setItem("access_token", res.access_token);
  window.location.href = "file:///home/voma/www/2023new/morze-chat/morze-client/index.html";
}

const getOwnUserId = () => {
  const access_token = localStorage.getItem('access_token');
  if(!access_token) {
    return false;
  }
  const tokenData = parseToken(access_token);
  if(!tokenData) {
    return false;
  }
  return tokenData.sub;
}

createUsersList();