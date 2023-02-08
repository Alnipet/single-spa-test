## steps to recreate vite dev & prod setup with single-spa

1.  run root-config:

```
npm install
npm run start
```

2. run the vite-app in development mode in a new terminal tab:

```
cd vite-app
npm install
npm run dev
```

-> see that the application works: [https://vitejs-vite-xcgnpu--9001.local.webcontainer.io/](https://vitejs-vite-xcgnpu--9001.local.webcontainer.io/)

3. run the vite-app in production mode:

```
cd vite-app
npm run build
npm run preview
```

-> see that the application still works in prod mode: [https://vitejs-vite-xcgnpu--9001.local.webcontainer.io/](https://vitejs-vite-xcgnpu--9001.local.webcontainer.io/)

> Hint: when ran in production mode it currently throws the following error: `Cannot use import statement outside a module`
