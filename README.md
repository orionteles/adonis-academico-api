# Adonis Acadêmico API

Backend de sistema acadêmico feito em NodeJS utilizando o framework AdonisJS.

## Setup

Criar um banco de dados no SGBD desejado. Exemplo de criação utilizando Mysql:
```bash
CREATE SCHEMA 'academico' DEFAULT CHARACTER SET utf8;
```

Para configurar o projeto, execute os seguintes comandos:

```bash
git clone https://github.com/orionteles/adonis-academico-api.git
cd adonis-academico-api
npm i
```

Configure o arquivo .env (copie o arquivo .env-example e altere as configurações do banco)
Após isso, execute os comandos a seguir:

```bash
adonis key:generate
adonis migration:run --seed
adonis serve --run
```

### Documentação

Após iniciar o projeto, pode verificar a documentação em `http://127.0.0.1:3333/docs`