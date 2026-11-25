/* =========================================================
   1. DADOS DOS PRODUTOS (FICTÍCIOS)
   ========================================================= */
const produtos = [
    {
        nome: "Nike Air Red Edition",
        preco: "R$ 1.499,99",
        imagem: "assets/nikered.png",
        alt: "Tênis Nike vermelho",
        condicao: "Desapego • Seminovo (Tamanho 41)",
        descricao: "Par único de coleção pessoal, usado poucas vezes e com caixa original. Ideal para quem busca destaque no visual."
    },
    {
        nome: "Nike Purple Court",
        preco: "R$ 1.499,99",
        imagem: "assets/nikeroxo.png",
        alt: "Tênis Nike roxo",
        condicao: "Revenda • Novo sem uso (Tamanho 40)",
        descricao: "Modelo de edição limitada garimpado para a vitrine da Nike Shoes. Conforto no dia a dia com acabamento premium."
    },
    {
        nome: "Nike Orange Blaze",
        preco: "R$ 1.499,99",
        imagem: "assets/nikelaranja.png",
        alt: "Tênis Nike laranja",
        condicao: "Desapego • Excelente estado (Tamanho 42)",
        descricao: "Colorway vibrante difícil de achar nas lojas tradicionais. Revisado e higienizado antes de entrar no catálogo."
    },
    {
        nome: "Nike Soft Rose Feminino",
        preco: "R$ 1.499,99",
        imagem: "assets/nikefeminino.png",
        alt: "Tênis Nike feminino",
        condicao: "Revenda • Seminovo (Tamanho 37)",
        descricao: "Design leve e versátil para uso diário. Peça única disponível enquanto durar no nosso estoque de desapegos."
    }
];

/* =========================================================
   2. TEMA CLARO / ESCURO (COM PERSISTÊNCIA)
   ========================================================= */
const body = document.body;
const btnTema = document.querySelector("#mudartema");

function aplicarTema(escuro) {
    body.classList.toggle("dark", escuro);
    if (btnTema) {
        btnTema.setAttribute("aria-pressed", String(escuro));
    }
}

// Recupera o tema salvo ao carregar a página
const temaSalvo = localStorage.getItem("tema") === "dark";
aplicarTema(temaSalvo);

if (btnTema) {
    btnTema.addEventListener("click", () => {
        const novoTemaEscuro = !body.classList.contains("dark");
        aplicarTema(novoTemaEscuro);
        localStorage.setItem("tema", novoTemaEscuro ? "dark" : "light");
    });
}

/* =========================================================
   3. MODAL DE DETALHES DOS PRODUTOS
   ========================================================= */
const modal = document.querySelector("#modal-produto");
const modalImg = document.querySelector("#modal-img");
const modalTitulo = document.querySelector("#modal-titulo");
const modalCondicao = document.querySelector("#modal-condicao");
const modalDescricao = document.querySelector("#modal-descricao");
const modalPreco = document.querySelector("#modal-preco");
const btnFecharModal = document.querySelector("#fechar-modal");

function abrirModalProduto(indice) {
    if (!modal) return;
    const item = produtos[indice];

    modalImg.src = item.imagem;
    modalImg.alt = item.alt;
    modalTitulo.textContent = item.nome;
    modalCondicao.textContent = item.condicao;
    modalDescricao.textContent = item.descricao;
    modalPreco.textContent = item.preco;

    modal.showModal();
}

if (modal && btnFecharModal) {
    btnFecharModal.addEventListener("click", () => modal.close());

    // Fecha ao clicar fora da caixa do modal
    modal.addEventListener("click", (evento) => {
        if (evento.target === modal) {
            modal.close();
        }
    });
}

// Torna os 4 produtos do catálogo clicáveis
const cardsCatalogo = document.querySelectorAll(".produto-card");
cardsCatalogo.forEach((card) => {
    card.addEventListener("click", () => {
        const indice = Number(card.dataset.produto);
        abrirModalProduto(indice);
    });
});

/* =========================================================
   4. CARROSSEL DE DESTAQUES
   ========================================================= */
const carrosselCard = document.querySelector("#carrossel-card");
const carrosselImg = document.querySelector("#carrossel-img");
const carrosselNome = document.querySelector("#carrossel-nome");
const carrosselPreco = document.querySelector("#carrossel-preco");
const btnAnterior = document.querySelector("#btn-anterior");
const btnProximo = document.querySelector("#btn-proximo");
const containerIndicadores = document.querySelector("#carrossel-indicadores");

let indiceAtual = 0;

function atualizarCarrossel() {
    if (!carrosselCard) return;
    const item = produtos[indiceAtual];

    carrosselImg.src = item.imagem;
    carrosselImg.alt = item.alt;
    carrosselNome.textContent = item.nome;
    carrosselPreco.textContent = item.preco;

    // Atualiza qual indicador está ativo
    const botoesIndicadores = containerIndicadores.querySelectorAll(".indicador");
    botoesIndicadores.forEach((botao, i) => {
        const ativo = i === indiceAtual;
        botao.classList.toggle("ativo", ativo);
        botao.setAttribute("aria-selected", String(ativo));
    });
}

if (carrosselCard && btnAnterior && btnProximo && containerIndicadores) {
    // Cria os botões indicadores (1, 2, 3, 4)
    produtos.forEach((produto, i) => {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "indicador";
        botao.textContent = i + 1;
        botao.setAttribute("aria-label", `Ir para ${produto.nome}`);
        botao.addEventListener("click", () => {
            indiceAtual = i;
            atualizarCarrossel();
        });
        containerIndicadores.appendChild(botao);
    });

    btnAnterior.addEventListener("click", () => {
        indiceAtual = (indiceAtual - 1 + produtos.length) % produtos.length;
        atualizarCarrossel();
    });

    btnProximo.addEventListener("click", () => {
        indiceAtual = (indiceAtual + 1) % produtos.length;
        atualizarCarrossel();
    });

    // Clicar no produto exibido no carrossel também abre os detalhes
    carrosselCard.addEventListener("click", () => {
        abrirModalProduto(indiceAtual);
    });

    atualizarCarrossel();
}
