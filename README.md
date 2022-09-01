# Angular Docker variaveis de ambiente

Projeto desenvolvido para demonstrar como trabalhar com variaveis de ambiente em um projeto Angular com Docker.

## Ambiente de desenvolvimento
Para executar o projeto basta seguir os passos abaixo:

1. Criação da imagem:
`docker build -t angular-docker-env .`

2. Criação do container
`docker run -d -p 3090:80 --env URL_IMAGEM='https://th.bing.com/th/id/R.ee80696d91a77436c3dcef705777437d?rik=jFxlZAHJvPiC3g&pid=ImgRaw&r=0' angular-docker-env`