document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById("inputText");
    const textOutput = document.getElementById("outputText");

    function criptografar(texto) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        texto = texto.toLowerCase();

        matrizCodigo.forEach(([char, code]) => {
            texto = texto.replaceAll(char, code);
        });

        return texto;
    }

    function descriptografar(texto) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        texto = texto.toLowerCase();

        matrizCodigo.forEach(([char, code]) => {
            texto = texto.replaceAll(code, char);
        });

        return texto;
    }

    function copiarTexto() {
        navigator.clipboard.writeText(textOutput.innerText)
            .then(() => {
                alert('Texto copiado com sucesso!');
            })
            .catch(err => {
                console.error('Falha ao copiar:', err);
                alert('Erro ao copiar o texto. Tente novamente.');
            });
    }

    document.getElementById("btnCriptografar").addEventListener("click", () => {
        const textoCriptografado = criptografar(textInput.innerText);
        textOutput.innerText = textoCriptografado;
        textInput.innerText = "";
        textOutput.classList.remove("hidden");
        document.getElementById("btnCopiar").classList.remove("hidden");
    });

    document.getElementById("btnDescriptografar").addEventListener("click", () => {
        const textoDescriptografado = descriptografar(textInput.innerText);
        textOutput.innerText = textoDescriptografado;
        textInput.innerText = "";
        textOutput.classList.remove("hidden");
        document.getElementById("btnCopiar").classList.remove("hidden");
    });

    document.getElementById("btnCopiar").addEventListener("click", copiarTexto);
});
