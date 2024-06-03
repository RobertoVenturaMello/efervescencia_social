document.getElementById('submitButton').addEventListener('click', async () => {
    const input = document.getElementById('userInput').value;

    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk-proj-5mbER4a77eEkg6BK8L0sT3BlbkFJTquLJaOQONNhKsqvtt01'  // Substitua SEU_API_KEY pela sua chave real
            },
            body: JSON.stringify({
                prompt: input,
                max_tokens: 50
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const output = data.choices[0].text.trim();
        document.getElementById('response').innerText = output;

    } catch (error) {
        console.error('Error:', error);
        document.getElementById('response').innerText = 'Ocorreu um erro ao processar sua solicitação. Detalhes do erro: ' + error.message;
    }
});
