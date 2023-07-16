const socket = io("http://localhost:3000");

const message = document.getElementById('message');
const messages = document.getElementById('messages');

const access_token = localStorage.getItem('access_token');

const morseError = document.getElementById('morse-error')

if(!access_token) window.location.href = "file:///home/voma/www/2023new/morze-chat/morze-client/login.html";

const decode_button = document.getElementById('decode-button')

const tokenData = parseToken(access_token);
if(tokenData.role === 'newby') {
  decode_button.style.display = "block";
}

const handleSubmitNewMessage = async () => {
  const userId =  document.getElementById('users').options[document.getElementById('users').selectedIndex].value;
  const data =  message.value;
  const isValidate = await validateMorse(data);
  if(!isValidate.isValide) {
    morseError.style.display = "block"
    return false;
  }
  morseError.style.display = "none"
  socket.emit('message', {
    userId,
    data
  })
}

const handleDecodeNewMessage = async () => {
  if(!access_token) {
    return false;
  }
  const tokenData = parseToken(access_token);
  if(tokenData.role === 'newby') {
    const lastMessage = messages.lastElementChild;
    const decodedMessage = await decode(lastMessage.innerHTML);
    lastMessage.innerHTML = decodedMessage.decodeStr;
  }
}

socket.on('message', ({ data, userId }) => {
  handleNewMessage(data, userId);
})

const handleNewMessage = (message, messageUserId) => {
  const ownUserId = getOwnUserId();

  if(ownUserId === messageUserId) {
    messages.appendChild(buildNewMessage(message));
  }
}

const buildNewMessage = (message) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(message))
  return li;
}