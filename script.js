async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const responseDiv = document.getElementById('response');
    const apiKey = 'SUA_API_KEY';
    const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: userInput,
            max_tokens: 100
        })
    });

    const data = await response.json();
    responseDiv.innerText = data.choices[0].text;
}
