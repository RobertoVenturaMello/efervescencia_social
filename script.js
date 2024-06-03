document.getElementById('submitButton').addEventListener('click', async () => {
    const input = document.getElementById('userInput').value;

    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer SEU_API_KEY`
        },
        body: JSON.stringify({
            prompt: input,
            max_tokens: 50
        })
    });

    const data = await response.json();
    const output = data.choices[0].text.trim();
    document.getElementById('response').innerText = output;
});
