document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. LÓGICA DA ÁREA INTERATIVA (Simulador de Ações) ---
    const btnCalcular = document.getElementById("btn-calcular");
    const selectPratica = document.getElementById("pratica-select");
    const blocoResultado = document.getElementById("resultado-interativo");

    btnCalcular.addEventListener("click", function () {
        const escolha = selectPratica.value;
        
        // Exibe o bloco de resposta
        blocoResultado.style.display = "block";

        if (escolha === "0") {
            blocoResultado.style.borderColor = "red";
            blocoResultado.innerHTML = "<p style='color: red;'>Por favor, selecione uma opção válida para analisar!</p>";
        } else if (escolha === "energia") {
            blocoResultado.style.borderColor = "var(--verde)";
            blocoResultado.innerHTML = `
                <h3>☀️ Resultado Estimado:</h3>
                <p><strong>Redução de Carbono:</strong> Cerca de 45% a menos de emissões de CO2 na atmosfera.</p>
                <p><strong>Economia Financeira:</strong> Retorno do investimento em energia solar esperado em 4 anos, gerando eletricidade limpa gratuita depois disso.</p>
            `;
        } else if (escolha === "agua") {
            blocoResultado.style.borderColor = "var(--azul)";
            blocoResultado.innerHTML = `
                <h3>💧 Resultado Estimado:</h3>
                <p><strong>Economia de Recurso:</strong> Redução de até 60% no consumo de água da propriedade.</p>
                <p><strong>Saúde do Solo:</strong> Evita a lavagem de nutrientes (lixiviação) e mantém a umidade ideal para as raízes.</p>
            `;
        } else if (escolha === "bio") {
            blocoResultado.style.borderColor = "var(--verde-escuro)";
            blocoResultado.innerHTML = `
                <h3>🌱 Resultado Estimado:</h3>
                <p><strong>Preservação Ambiental:</strong> 100% de proteção para polinizadores (como abelhas) e zero contaminação do lençol freático.</p>
                <p><strong>Valor Agregado:</strong> Seu produto final ganha selo de cultivo sustentável, aumentando o valor de mercado.</p>
            `;
        }
    });

    // --- 2. VALIDAÇÃO DO FORMULÁRIO DE CONTATO (Envio Fictício) ---
    const formContato = document.getElementById("form-contato");
    const msgSucesso = document.getElementById("msg-sucesso");

    formContato.addEventListener("submit", function (evento) {
        evento.preventDefault(); // Impede a página de recarregar

        // Pega o nome digitado
        const nomeUsuario = document.getElementById("nome").value;

        // Exibe mensagem de feedback bem-sucedida baseada nos dados fictícios
        msgSucesso.textContent = `Obrigado pelo contato, ${nomeUsuario}! Enviamos uma confirmação para o seu e-mail. Nossa equipe entrará em contato em breve.`;
        
        // Limpa os campos do formulário
        formContato.reset();
    });
});
