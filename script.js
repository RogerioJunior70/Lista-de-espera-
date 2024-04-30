document.addEventListener('DOMContentLoaded', function () { // Aguarda o carregamento completo da página
    const waitlistBtn = document.getElementById('waitlistBtn'); // Obtém o botão "Join waitlist" pelo ID
    const mensagem = document.getElementById('message'); // Obtém a área de mensagem pelo ID

    waitlistBtn.addEventListener('click', function () { // Adiciona um evento de clique ao botão
        mensagem.textContent = 'Obrigado por entrar na nossa lista de espera'; // Define o texto da mensagem
        waitlistBtn.disabled = true; // Desativa o botão após clicar
    });
});
