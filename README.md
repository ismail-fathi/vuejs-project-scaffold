# vuejs-project-scaffold

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Project Setup

Once you clone the project, change:

- The project folder
- The package name in `package.json`
- The project title in `index.html`
- Change the Git remote origin using: git remote set-url origin https://github.com/ismail-fathi/{repo-name}.git
- Add a `.env` file to set your Firebase configuration variables:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```

- The `.firebaserc` file project default name:

```
{
  "projects": {
    "default": "YOUR_FIREBASE_PROJECT_ID"
  }
}
```

- Enable the Github Workflows by uncommentig all the files in the `.github` folder
- Change the value of the `projectId` in the workflows to your own Firebase projectID:

```
projectId: YOUR_FIREBASE_PROJECT_ID
```

- Set new Github repository secrets:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
FIREBASE_SERVICE_ACCOUNT=
```

- Run

```sh
nvm use
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

or if you want to use the UI

```sh
npm run test:unit:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Format with Prettier

```sh
npm run format
```
