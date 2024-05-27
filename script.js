function getCredentials() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    return { idInstance, apiTokenInstance };
}

function displayResponse(response) {
    const responseElement = document.getElementById('response');
    responseElement.textContent = JSON.stringify(response, null, 2);
}

async function getSettings() {
    const { idInstance, apiTokenInstance } = getCredentials();
    const url = `https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResponse(data);
    } catch (error) {
        displayResponse(error);
    }
}

async function getStateInstance() {
    const { idInstance, apiTokenInstance } = getCredentials();
    const url = `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResponse(data);
    } catch (error) {
        displayResponse(error);
    }
}

async function sendMessage() {
    const { idInstance, apiTokenInstance } = getCredentials();
    const chatId = document.getElementById('chatId').value + document.getElementById('messageType').value;
    const message = document.getElementById('message').value;
    const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
    const body = {
        chatId: chatId,
        message: message
    };
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        displayResponse(data);
    } catch (error) {
        displayResponse(error);
    }
}

async function sendFileByUrl() {
    const { idInstance, apiTokenInstance } = getCredentials();
    const chatId = document.getElementById('chatId').value + document.getElementById('messageType').value;
    const fileUrl = document.getElementById('fileUrl').value;
    const url = `https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`;
    const body = {
        chatId: chatId,
        urlFile: fileUrl,
        fileName: fileUrl.split('/').pop(),
        caption: 'Here is your file'
    };
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        displayResponse(data);
    } catch (error) {
        displayResponse(error);
    }
}
