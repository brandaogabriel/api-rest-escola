# Simples API REST para consumo de dados

Api desenvolvida durante o [curso](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado) de JavaScript na udemy.

**Atenção:** Você precisa ter o NodeJS instalado no seu computador.

Para subir o projeto no ar com o Mariadb, copie o arquivo `.env_example` para `.env`.

Você também precisará adicionar uma secret key no arquivo `.env`:

```
TOKEN_SECRET='sua_secret_key_aqui'
```

Execute os comandos abaixo:

```
npm i
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
```

Neste ponto sua API deverá está rodando no endereço http://localhost:3001/.

As **configurações base** para conexão com **MySql/Mariadb** ja estão **definidas** em `src/config/database.js`

As configurações começando com `process.env.` vem do arquivo `.env`.

Você pode verificar os usuários criados em `src/database/seeds`.

Você pode obter o token JWT na rota `/tokens`, passando os dados JSON:

```json
{
	"email": "luiz1@gmail.com",
	"password": "123456"
}
```
<br></br>
# Endpoints

Os seguintes endpoints estão configurados:

## Home - não há nada aqui

- `/` - GET

## Usuários (users)

- `/user` - DELETE - Apaga o usuário logado
- `/users` - PUT - Atualiza o usuário logado
- `/users` - POST - Cria um usuário
- `/users/:id` - GET - Mostra o usuário do ID enviado (rota desativada)
- `/users` - GET - Mostra todos os usuários (rota desativada)

**Dados para usuários (JSON)**

```
{
	"nome": "nome válido",
	"password": "senha válida",
	"email": "email_valido@email.com"
}
```

## Tokens

- `/tokens` - POST - Obtém o token JWT

**Dados para tokens (JSON)**

```json
{
	"email": "luiz1@gmail.com",
	"password": "123456"
}
```

## Aluno

- `/alunos/:id` - DELETE - Apaga o aluno do ID enviado
- `/alunos/:id` - PUT - Atualiza o aluno do ID enviado
- `/alunos` - POST - Cria um aluno
- `/alunos/:id` - GET - Mostra o aluno do ID enviado
- `/alunos` - GET - Mostra todos os alunos


**Dados para tokens (JSON)**

```json
{
	"nome": "Nome",
	"sobrenome": "Sobrenome",
	"email": "email@email.com",
	"idade": "50",
	"peso": "80.04",
	"altura": "1.90"
}
```

## Fotos

Atenção aqui, esse é o único endpoint `multipart/form-data` para envio de arquivos.

- `/fotos` - POST - Recebe um arquivo de foto JPG ou PNG e um `aluno_id`.

**Dados para fotos (multipart/form-data)**

```json
{
	"foto": (ARQUIVO.PNG|JPG),
	"aluno_id": ":id"
}
```

O repositório original do projeto pode ser encontrado [aqui](https://github.com/luizomf/simple_api_rest_sqlite)
