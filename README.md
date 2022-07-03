<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">wine-frontend-test</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    Este projeto ainda está em desenvolvimento, e há muita coisa para implementar e melhorar, porém representa muito aprendizado, dedicação e paixão por tecnologia.
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Este projeto foi desenvolvido como um teste técnico desenvolvido pela empresa Wine, porém ao mesmo tempo foi um grande desafio e aprendizado. 
O framework utilizado foi o nextJS, porém decidi aplicar também o redux toolkit como ferramenta de gerenciamento de estados, e na verdade, tentei utilizar o máximo de tecnologias possíveis, o quê, como consequência também me fez gastar um bom tempo com adaptações. Contudo, espero que você goste desse projeto que foi feito com muita dedicação e investimento, e agradeço pelos feedbacks, code reviews e :cookie:s!

Ah! O deploy do projeto foi feito através da plataforma Vercel! E você pode conferir neste endereço aqui => https://nextjs-wine-frontend-test.vercel.app/.

## 🏁 Getting Started <a name = "getting_started"></a>

Caso queira rodar este projeto na própria máquina, é necessário utilizar NPM ou Yarn! Fora isso, não existem pre-requisitos.

### Installing

A instalação das dependências deve ser feita utilizando NPM, mas algumas dependências são exclusivas pra desenvolvimento!

```
"npm install"

ou

"yarn install"

```

Assim que a instalação acabar, você poderá fazer a build para a versão em produção:

npm run build

talvez leve algum tempo, mas funciona! :smiley:

Após a finalização da build é só utilizar npm start, e o projeto deve estar disponível em localhost:3000. 

:warning: É importante que a porta 3000 esteja livre, caso contrário você não conseguirá acessar!! :warning:

Contudo, ainda assim será possível rodar o projeto em ambiente de desenvolvimento utilizando o comando npm run dev. Porém é importante ressaltar que o NextJs tem algumas limitações em ambiente de desenvolvimento e o caching pode não funcionar adequadamente.

## 🔧 Running the tests <a name = "tests"></a>

Esta seção está entre as minhas pŕoximas metas, pois ainda não consegui fazer a utilização adequada do cypress. por este motivo ele está incluso nos pacotes do projeto, porém não implementado. O mesmo vale para o Jest, afinal uma das próximas metas será também implementar testes unitários. 

## 🎈 Usage <a name="usage"></a>

Basicamente você pode acessar um catálogo de vinhos disponibilizado pela Wine para testes como este. É possível colocar itens no carrinho, será possível verificar através do localStorege na aba application no seu navegador favorito, também é possível realizar a filtragem através de preços e visualizar os detalhes de cada produto, como média de avalialção do vinho específico, comentários dos sommeliers e várias outras informações. Infelizmente, porém, o banco de dados é um mock, e portanto os produtos se repetem por diversas vezes. :sweat_smile::sweat_smile:


## ⛏️ Built Using <a name = "built_using"></a>

- [NextJS](https://nextjs.org/) - Web framework
- [ReactJS](https://pt-br.reactjs.org/) - Front-End library
- [Redux toolkit](https://redux-toolkit.js.org/) - State Management Library
- [Styled Components](https://styled-components.com/) - Styling
- [Cypress](https://www.cypress.io/) - End to end testing
- [Jest](https://jestjs.io/pt-BR/) - Unit testing
- [ESlint](https://eslint.org/) - Unit testing
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Vercel](https://vercel.com/dashboard) - Deploy

## ✍️ Authors <a name = "authors"></a>

Só eu mesmo, mas esse cara aqui me deu uma mão com o readme através da extensão SympleReadme!
Fica aí o biscoito para @kylelobo (https://github.com/kylelobo) :cookie:

Ah, e não dá pra esquecer dos meus colegas, tutores e amigos da @trybe (https://betrybe.com/), com quem aprendi e me inspirei ao longo desse primeiro ano de estudos de desenvolvimento Web.

Mais uma vez, muito obrigado pela atenção! Espero que esse código seja útil a você que está lendo isso.
