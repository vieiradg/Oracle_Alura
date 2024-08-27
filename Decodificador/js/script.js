document.addEventListener('DOMContentLoaded', () => {
    // Pegando os elementos necessários
    const textInput = document.querySelector(".areaTexto1"); 
    const textOutput = document.querySelector(".areaTexto2 p");
    const btnCriptografar = document.getElementById("btnCriptografar");
    const btnDescriptografar = document.getElementById("btnDescriptografar");
    const btnCopiar = document.getElementById("btnCopiar");
    const btnLimpar = document.getElementById("btnLimpar");

    // Função para verificar se o texto só tem letras minúsculas e espaços
    function validarTexto(texto) {
        const regex = /^[a-z\s]+$/;
        return regex.test(texto);
    }

    // Quando clicar em "Criptografar"
    function btnCriptografarHandler() {
        const texto = textInput.value;
        if (!validarTexto(texto)) {
            alert("Por favor, insira apenas letras minúsculas e espaços.");
            return;
        }
        const textoCriptografado = criptografar(texto);
        textOutput.textContent = textoCriptografado;

        // Esconde a imagem e as mensagens de aviso
        const imagem = document.querySelector(".imagem-menino");
        const mensagemAdvertencia = document.querySelector(".mensagem-advertencia");
        const mensagemInfo = document.querySelector(".mensagem-info");
        if (imagem) imagem.classList.add("hidden");
        if (mensagemAdvertencia) mensagemAdvertencia.classList.add("hidden");
        if (mensagemInfo) mensagemInfo.classList.add("hidden");

        // Mostra o resultado e os botões
        textOutput.classList.remove("hidden");
        btnCopiar.classList.remove("hidden");
        btnLimpar.classList.remove("hidden");
    }

    // Criptografa o texto
    function criptografar(stringCriptografada) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringCriptografada = stringCriptografada.toLowerCase();

        // Troca cada vogal pelo seu código correspondente
        for (let i = 0; i < matrizCodigo.length; i++) {
            if (stringCriptografada.includes(matrizCodigo[i][0])) {
                stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }

        return stringCriptografada;
    }

    // Quando clicar em "Descriptografar"
    function btnDescriptografarHandler() {
        const texto = textInput.value;
        if (!validarTexto(texto)) {
            alert("Por favor, insira apenas letras minúsculas e espaços.");
            return;
        }
        const textoDescriptografado = descriptografar(texto);
        textOutput.textContent = textoDescriptografado;

        // Mostra o resultado e os botões
        textOutput.classList.remove("hidden");
        btnCopiar.classList.remove("hidden");
        btnLimpar.classList.remove("hidden");
    }

    // Descriptografa o texto
    function descriptografar(stringDescriptografada) {
        let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
        stringDescriptografada = stringDescriptografada.toLowerCase();

        // Troca cada código pela sua vogal original
        for (let i = 0; i < matrizCodigo.length; i++) {
            if (stringDescriptografada.includes(matrizCodigo[i][0])) {
                stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }

        return stringDescriptografada;
    }

    // Quando clicar em "Copiar"
    function btnCopiarHandler() {
        const texto = textOutput.textContent;
        navigator.clipboard.writeText(texto)
            .then(() => alert("Texto copiado com sucesso!"))
            .catch(() => alert("Erro ao copiar o texto."));
    }

    // Quando clicar em "Limpar"
    function btnLimparHandler() {
        textInput.value = "";
        textOutput.textContent = "Resultado";
        textOutput.classList.add("hidden");
        btnCopiar.classList.add("hidden");
        btnLimpar.classList.add("hidden");

        // Mostra a imagem e as mensagens de aviso de novo
        const imagem = document.querySelector(".imagem-menino");
        const mensagemAdvertencia = document.querySelector(".mensagem-advertencia");
        const mensagemInfo = document.querySelector(".mensagem-info");
        if (imagem) imagem.classList.remove("hidden");
        if (mensagemAdvertencia) mensagemAdvertencia.classList.remove("hidden");
        if (mensagemInfo) mensagemInfo.classList.remove("hidden");
    }

    // Ligando as funções aos botões
    btnCriptografar.addEventListener("click", btnCriptografarHandler);
    btnDescriptografar.addEventListener("click", btnDescriptografarHandler);
    btnCopiar.addEventListener("click", btnCopiarHandler);
    btnLimpar.addEventListener("click", btnLimparHandler);
});
