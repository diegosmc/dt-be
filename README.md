# DeliveryTime (Backend)

Este é o backend da aplicação DeliveryTime, desenvolvido utilizando TypeScript, PostgreSQL e Prisma.

## Configuração do Ambiente

Antes de iniciar o projeto, certifique-se de ter as seguintes dependências instaladas:

- Node.js (versão LTS)
- npm (Geralmente vem com o Node.js)
- PostgreSQL (certifique-se de ter um servidor PostgreSQL em execução ou defina a URL do banco de dados no arquivo .env)

## Instalação

1. Clone este repositório em sua máquina local:

git clone  https://gitlab.com/senac-projetos-de-desenvolvimento/2023-diego-cardozo/deliverytime-backend
cd deliverytime-backend

## Instale as dependências do projeto:

npm install

## Configuração do Banco de Dados:

Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente necessárias. Exemplo:
    
## DATABASE_URL="postgresql://postgres:senha@endereco-do-banco:5432/nome-do-banco"

Execute as migrações do Prisma para criar as tabelas do banco de dados:

npx prisma migrate dev

## Uso

Para iniciar o servidor em modo de desenvolvimento, execute:

npm run dev

O servidor estará disponível em http://localhost:3000.

## Scripts Disponíveis

npm run dev: Inicia o servidor em modo de desenvolvimento com o nodemon e habilita o TypeScript.

npm run build: Compila o código TypeScript para a pasta build.

npm start: Inicia o servidor em modo de produção a partir do código compilado em build.

npm run db:format: Formata os arquivos de migração do Prisma.
npm run db:migrate: Executa as migrações do Prisma para sincronizar o banco de dados.
npm run db:seed: Executa os seeds (dados iniciais) do Prisma para popular o banco de dados.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um Pull Request ou relatar problemas (issues) se encontrar algum bug ou tiver alguma sugestão.
