document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const serviceId = params.get("id");

    if (!serviceId) {
        console.error("ID do serviço não fornecido.");
        document.getElementById("service-details").innerHTML = "<div class='container'><h3>Serviço não encontrado. Por favor, retorne à página de serviços.</h3></div>";
        document.querySelector(".service-request").style.display = "none";
        return;
    }

    fetch("data/services.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar os dados dos serviços.");
            }
            return response.json();
        })
        .then(servicos => {
            const servico = servicos.find(s => s.id === serviceId);

            if (!servico) {
                console.error("Serviço não encontrado.");
                document.getElementById("service-details").innerHTML = "<div class='container'><h3>Serviço não encontrado. Por favor, retorne à página de serviços.</h3></div>";
                document.querySelector(".service-request").style.display = "none";
                return;
            }

            // Atualiza título da aba e meta description
            document.title = `VIVA - ${servico.nome}`;
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', servico.descricao);
            }

            // Preenche os campos da página
            document.getElementById("titulo-servico").textContent = servico.nome;
            document.getElementById("subtitulo-servico").textContent = servico.subtitulo;
            document.getElementById("descricao-servico").textContent = servico.descricao;

            // Atualiza o ícone do serviço - Usando um mapeamento de ícones
            const iconMapping = {
                "analise-vulnerabilidades": "fas fa-shield-alt",
                "consultoria-seguranca": "fas fa-user-shield",
                "monitoramento-ameacas": "fas fa-search",
                "treinamento-conscientizacao": "fas fa-chalkboard-teacher",
                "gestao-acessos": "fas fa-key",
                "backup-recuperacao": "fas fa-database"
            };

            // Atualiza o ícone
            const iconElement = document.querySelector(".service-item i");
            if (iconElement) {
                iconElement.className = iconMapping[serviceId] || "fas fa-shield-alt"; // Usa o ícone padrão se não encontrar
            }

            const beneficiosList = document.getElementById("beneficios-servico");
            beneficiosList.innerHTML = "";
            servico.beneficios.forEach(beneficio => {
                const li = document.createElement("li");
                li.textContent = beneficio;
                beneficiosList.appendChild(li);
            });

            document.getElementById("como-acessar").textContent = servico.como_acessar;
            document.getElementById("caso-sucesso").textContent = servico.caso_sucesso;

            // Atualiza o título do formulário
            const formHeading = document.querySelector(".service-request .section-heading h4");
            if (formHeading) {
                formHeading.textContent = `Inicie Sua ${servico.nome}`;
            }

            // Atualiza o botão do formulário
            const submitButton = document.getElementById("form-submit");
            if (submitButton) {
                submitButton.textContent = `Solicitar ${servico.nome.split(" ")[0]}`;
            }
        })
        .catch(error => {
            console.error("Erro ao processar os dados do serviço:", error);
            document.getElementById("service-details").innerHTML = "<div class='container'><h3>Erro ao carregar os dados do serviço. Por favor, tente novamente mais tarde.</h3></div>";
            document.querySelector(".service-request").style.display = "none";
        });
});