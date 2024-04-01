# Electron

Un piccolo progetto con Electron

## Packages:

1. Electron: framework per la compilazione di app native
2. TypeScript: superset di JavaScript
3. Npm-run-all: tool per eseguire più comandi con npm
4. ESLint: linter per verifica del codice
5. React: UI library
6. Webpack: Module builder
7. Babel: Transpiler

## Avviare il codice

Per avviare fai:

```shell
npm run build
npm start
```

Per il watch in dev, apri 2 terminali:

```shell
npm run webpack:watch
```

```shell
npm start
```

## Errori noti

- [36818:0401/102319.493400:ERROR:CONSOLE(1)] "Request Autofill.enable failed. {"code":-32601,"message":"'Autofill.enable' wasn't found"}", source: devtools://devtools/bundled/core/protocol_client/protocol_client.js (1)
  https://github.com/electron/electron/issues/41614#issuecomment-2006678760
