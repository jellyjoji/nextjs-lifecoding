#Next.js

## Install

```bash
npx create-next-app@latest

cd project
npm install -g npm
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy

```bash
npm run build
npm run start
```

## json db backend

```bash
npm uninstall -D json-server

npm install -D json-server@0.17.4

npx json-server --port 9999 db.json

//http://localhost:9999/ 에서 확인
```
