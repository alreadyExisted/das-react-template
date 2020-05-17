# DSA React Template

Template for [Deno App Starter CLI](https://github.com/alreadyExisted/deno_app_setuper)

## Features

- Linting and formatting (ESLint + Prettier)
- Language tools (Typescript + Babel + Hot Reload)
- Styles (Css Modules + PostCSS)
- Routing (React Router)
- Localization (React Intl)
- State management (Redux Saga + Redux Toolkit)
- UI Componenst (Material UI)
- Form (Formik)
- Requests (Axios)
- Deploy (Docker + Nginx + Runtime Configuration)

## Development

```
npm i
npm run dev
```

## Deployment

### Build

```
docker build -t react-template .
```

### Run

```
docker run -p [EXTERNAL PORT]:80 -e MAIN_API=https://api.main.com -e GITHUB_API=https://api.github.com react-template
```

### Configuration

All available configuration props stored in `.env.example`