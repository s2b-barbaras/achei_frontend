# Projeto Achei - FrontEnd
Aplicação com o intuito de informar locais de diferentes utilidades em Porto Alegre com a finalidade de auxiliar àqueles que necessitam de determinado serviço, feita para o projeto do S2B.

## Sumário

  - [Introdução]
    - [Principais recursos utilizados]
    - [Pré-requisitos]
    - [Instalação do Ambiente]
    - [Uso do GitHub]
  - [Considerações]
  - [Possíveis melhorias]
  - [Autoras]
  - [License]

## Introdução

Nessa seção é descrito as dependências utilizadas na aplicação como um todo e instruções de como iniciar o projeto em modo de desenvolvimento.

Disponível em: http://localhost:4200

### Principais recursos utilizados

* [Angular](http://angular.io) - O framework web utilizado. Versão 6 utilizada, última até o momento.
* [Node](https://nodejs.org/) - Necessário para o Angular.
* [NPM](https://www.npmjs.com) - Gerenciador de Dependências.
*  [Angular Material](https://material.angular.io/) - Framework de estilo.
*  [GitHub](https://github.com/) - Repositório de versionamento do código.
*  [Firebase Hosting](https://firebase.google.com/docs/hosting/?hl=pt-br) - Ferramenta de Cloud fornecida pelo Google para hospedagem e deploy da aplicação.


### Pré-requisitos

O que foi necessário para rodar o projeto: 

- Node versão v10.9.0
- GIT instalado
- Conta no GitHub

### Instalação do Ambiente

Passos necessários para rodar o projeto: 

- Clonar no projeto: 
```
  git clone https://github.com/s2b-barbaras/achei_frontend
```
- Instalar o angular-cli para ter acesso as ferramentas necessárias para rodar um projeto Angular em desenvolvimento: 

```
npm install -g @angular/cli
```

- Entrar no diretório do projeto e instalar as dependências necessárias:

```
cd achei_frontend

npm install
```

- rodar o projeto:
```
npm start ou ng serve
```

NOTA: O comando npm start configurado nos scripts do package.json, executa o --aot para já evitar possíveis erros na hora de gerar uma build com esse recurso, que otimiza o bundle final.

- Se tudo der certo no terminal, abra no navegador pela URL localhost:4200 que qualquer modificação no projeto refletirá no browser.
  - https://localhost:4200


### Uso do GitHub
  - Criação de um kanban com as etapas Todo, Doing e Closed. [Link do Board](https://github.com/orgs/s2b-barbaras/projects/1)
  - Criação de issues para poder relacionar nos commits.
  [Link das Issues](https://github.com/s2b-barbaras/achei_frontend/issues)


## Considerações

- 


## Possíveis melhorias

- Expandir para outros domínios de utilidade (cinemas, postos de gasolina, etc).
- Limitar a quantidade que vem da lista, através de um parâmetro de raio de localização.
- Rotas e Direções.
- Adicionar campos com descrições dos lugares no modal detalhes.
  
## Autoras

* **Bárbara Becker da Rosa** -  [GitHub](https://github.com/barbbecker)

<a>
  <img 
  alt="Imagem da Autora Bárbara Becker" src="https://avatars1.githubusercontent.com/u/39573350?s=400&u=3a24cbbb390e39b0eaab3c8278124a8b8ee252ae&v=4" width="100">
</a>

* **Bárbara Anger** -  [GitHub](https://github.com/BarbaraAnger)
  
<a>
  <img 
  alt="Imagem da Autora Bárbara Anger" src="https://avatars3.githubusercontent.com/u/28331915?s=400&v=4" width="100">
</a>

## License

Este projeto possui Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para saber mais detalhes.
