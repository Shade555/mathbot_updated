document.getElementById('sendButton').addEventListener('click', function() {
    const input = document.getElementById('messageInput');
    const messageText = input.value;

    if (messageText.trim() !== "") {
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = messageText;

        document.querySelector('.chat-area').appendChild(userMessage);
        input.value = '';
    }
});
