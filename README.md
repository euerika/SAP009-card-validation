# CARD VALIDATION 
Página Web de livros infantis que permite ao usuário validar seu cartão de crédito simulanado a área de pagamento de uma loja virtual.
Projeto #1 do Bootcamp Laboratoria.

## Índice

- [1. Introdução](#1-Introdução)
- [2. Instalações](#2-instalações)
- [3. Desingn do Projeto](#3-design-do-Projeto)
- [4. Tela de interação](#4-tela-de-interação)
- [5. Tecnologias](#6-tecnologias)
- [6. Autora](#7-autora)

## 1. Introdução

O objetivo deste projeto é permitir que o usuário valide um cartão de crédito e tenha as funcionalidades de ocultar os dígitos do cartão exceto os 4 últimos.

A Validação é feita pelo algoritmo de Luhn, ou módulo 10, é um método utilizado para validar desde números de IMEI de celular, números de identificação até cartões de crédito entre outros. Este algoritimo funciona desta maneira:

1. Obtemos o inverso do número a ser verificado (contendo apenas dígitos [0-9]);
2. Os números que ocupam uma posição par são multiplicados por dois;
3. Se esse número for maior ou igual a 10, os dígitos são somados e substituem a posição par;
4. O número final a ser verificado é a soma de todos os dígitos e este será válido se for um múltiplo de 10.
   A ideia do produto foi uma página de pagamento de uma loja virtual. O objetivo do usuário é finalizar uma compra e para isso ele precisa inserir seus dados, inclusive os dados de cartão de crédito para a validação, assim que validado seria possível continuar a navegação.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Instalações

Para instalar e executar este projeto siga os seguintes passos:

- Se assegure de ter um editor de texto como VSCode;
- Tenha um terminal e git instalados;
- Faça o clone para sua maquina local;
- Instale o Node.js
- Com o comando npm install no terminal instale as dependências do projeto;
- Para visualizar o programa no navegador use o comando npm start no terminal para abrir um servidor web local e entre na url indicada http://localhost:3000 no seu navegador;
- Para fazer os testes unitários execute o comando npm testno terminal.

## 3. Design do Projeto

Foi feito um protótipo de baixa fidelidade realizada em papel e lápis.

## 4. Tela de interação

A tela de interação foi criada em tons pasteis 

1. Tela Capturada do Projeto

![nova tela](https://user-images.githubusercontent.com/109056305/217069494-8e3f1516-5e78-4869-8176-d8e34949565d.jpg)

2. Quando o usuário tentar clicar em validar e não tiver inserido os números do cartão aparecerá uma mensagem de aviso para ele digitar os números.

![digite um número](https://user-images.githubusercontent.com/109056305/217069478-27c82827-e5d0-4661-bda1-2f1526695890.jpg)

3. Quando o usuário digitar o número e for <13 aparecerá uma mensagem de aviso pedindo para ele completar os números do cartão.

![complete](https://user-images.githubusercontent.com/109056305/217069470-81ddf362-697d-4ab0-8df1-c54a6962d28e.jpg)

4. Quando o cartão for válido aparecerá menssagem de cartão válido e os números mascarados exceto os últimos 4.

![cartao valido](https://user-images.githubusercontent.com/109056305/217069467-f9083277-40ba-4838-8cd1-644ada9a7395.jpg)

5. Quando digitado um cartão inválido será mostrado a mensagem de cartão invalido.

![cartao invalido](https://user-images.githubusercontent.com/109056305/217069457-305bedb0-ce8d-4ff7-903a-38d2b8dbe7cd.jpg)


## 5. Tecnologias

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">

<img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white">

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">


## 6. Autora

<div>
   <img height="150" widtht="150" style="border-radius:5px;" src="https://user-images.githubusercontent.com/109056305/217401080-8b2dff1e-f6c4-4b62-96bc-d79ee4c88e60.jpeg">
</div>


[Desenvolvido por Erika Soares dos Santos]("https://github.com/euerika/SAP009-card-validation")<br>

**Projeto do Bootcamp Laboratoria**

 

<a href="https://www.linkedin.com/in/erika-soares-dos-santos-54674b178/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white">

</a><a href = "mailto:erikasoares1209@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white">