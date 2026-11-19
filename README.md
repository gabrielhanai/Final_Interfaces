# Nike Shoes

Catálogo fictício de tênis da Nike feito com HTML, CSS e JavaScript puros, com tema claro/escuro, página de login (apenas visual) e foco em acessibilidade (WCAG).

## Estrutura

```
nike-shoes/
├── index.html
├── login.html
├── style.css
├── script.js
└── assets/ (imagens dos tênis)
```

## Construção

1. **Ideia:** uma vitrine simples de tênis, com modelos sugeridos por um amigo e fictícios.
2. **HTML:** `lang="pt-BR"`, `<title>` descritivo, `<header>` com `<nav>`, `<main>` com um único `<h1>` e uma lista `<ul>` de produtos. Cada produto é um `<li class="catalogo">` reaproveitável, com imagem (`alt`) e preço.
3. **CSS:** cabeçalho com `flex`, catálogo com `grid` e `auto-fit` (responsivo), botões com `:hover` e preços em caixas creme.
4. **Tema escuro:** `classList.toggle("dark")` no JavaScript, e as regras do CSS começam com `body.dark`. Antes eu usava `if/else` no `backgroundColor`, mas troquei por ser mais otimizado.
5. **Login:** formulário em um modal creme com `label`, `required` e `type` corretos. O botão "Entrar" só redireciona para o index, pois não há back-end.
6. **Cores:** branco e preto como base, creme nos modais e preços, amarelo nos hovers e foco do tema escuro, azul nos links do rodapé.
7. **Acessibilidade:** `alt` nas imagens, landmarks, skip link, foco visível, alvos de 44px, layout responsivo e contraste mínimo de 4,5:1.
8. **Testes:** navegação por teclado (Tab), modo celular (F12) e Lighthouse.

## Observações

Produtos, preços e login são fictícios. Referências: Netshoes e Centauro.