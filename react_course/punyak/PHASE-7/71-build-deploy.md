> `Production Builds`

React apps must be built into static HTML/JS/CSS files before deploying.

```bash
npm run build
```

- Vite minifies the code and removes development warnings
- the output is saved in the `dist/` folder

---

> `Deploying to Vercel or Netlify`

the easiest way to host a React frontend:
1. push your code to GitHub
2. connect the repository to Vercel or Netlify
3. set the build command to `npm run build` and output directory to `dist`
4. deployments will trigger automatically on new commits

---

> `Deploying alongside Flask (Docker)`

if you want to serve React directly from your Flask backend using Docker:

`Dockerfile`
```dockerfile
# Build React
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Serve with Nginx or Flask
FROM python:3.10
# copy the react build into the flask static folder...
```

---

> `Basic CI (Continuous Integration)`

run linting and tests automatically when code is pushed to GitHub.

`.github/workflows/ci.yml`
```yaml
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run lint
      - run: npm run test
```

- prevents bad code from being merged into `main`
