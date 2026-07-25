### Create React App (CRA)
- older way to start a React app
- simple, but slower and heavier
- less preferred now

### Vite
- modern and recommended
- fast startup
- quick hot reload
- easier for beginners and real projects

### How to create a Vite app
```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

- `npm create vite@latest my-app` creates the project
- `npm install` installs the packages
- `npm run dev` starts the local server

### Basic project structure
```txt
my-app/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
├── package.json
├── index.html
└── vite.config.js
```

- `src/App.jsx` is the main component
- `src/main.jsx` is the entry file
- `package.json` contains scripts and dependencies
- `index.html` is the main HTML file

### Development server
- `npm run dev` opens the app locally in browser
- you can see changes instantly while editing
- this makes testing faster

### React DevTools
- browser extension to inspect React apps
- helps see components, props, and state
- useful for debugging
