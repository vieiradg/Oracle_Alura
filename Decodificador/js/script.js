document.addEventListener('DOMContentLoaded', () => {
    const btnCriptografar = document.getElementById('btnCriptografar');
    const btnDescriptografar = document.getElementById('btnDescriptografar');
    const btnCopiar = document.getElementById('btnCopiar');

    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');

    const happyImage = document.getElementById('happyImage');
    const sadImage = document.getElementById('sadImage');
    const happyMessage = document.getElementById('happyMessage');
    const sadMessage = document.getElementById('sadMessage');

    function showFeedback(success) {
        if (success) {
            happyImage.style.display = 'block';
            happyMessage.style.display = 'block';
            sadImage.style.display = 'none';
            sadMessage.style.display = 'none';
        } else {
            happyImage.style.display = 'none';
            happyMessage.style.display = 'none';
            sadImage.style.display = 'block';
            sadMessage.style.display = 'block';
        }
    }

    function encrypt(text) {
        // Simulação de criptografia
        return btoa(text);
    }

    function decrypt(text) {
        // Simulação de descriptografia
        try {
            return atob(text);
        } catch (e) {
            return null;
        }
    }

    btnCriptografar.addEventListener('click', () => {
        const text = inputText.textContent.trim();
        const encryptedText = encrypt(text);
        if (encryptedText) {
            outputText.textContent = encryptedText;
            showFeedback(true);
        } else {
            showFeedback(false);
        }
    });

    btnDescriptografar.addEventListener('click', () => {
        const text = outputText.textContent.trim();
        const decryptedText = decrypt(text);
        if (decryptedText !== null) {
            inputText.textContent = decryptedText;
            showFeedback(true);
        } else {
            showFeedback(false);
        }
    });

    btnCopiar.addEventListener('click', () => {
        const text = outputText.textContent.trim();
        navigator.clipboard.writeText(text).then(() => {
            alert('Texto copiado para a área de transferência!');
        }).catch(() => {
            alert('Falha ao copiar o texto.');
        });
    });

    // Restringe caracteres especiais e letras maiúsculas em inputText
    inputText.addEventListener('input', (event) => {
        // Remove caracteres não permitidos
        let value = event.target.textContent;
        value = value.replace(/[^a-z\s]/g, ''); // Permite apenas letras minúsculas e espaços
        event.target.textContent = value;
    });

    // Inicializa o valor de inputText para garantir que começa com texto válido
    inputText.textContent = inputText.textContent.replace(/[^a-z\s]/g, '');
});
