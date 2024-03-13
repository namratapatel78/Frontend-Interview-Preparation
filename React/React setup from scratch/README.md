https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658

1. create a folder/directory -> mkdir my-npm-pkg && cd my-npm-pkg
2. npm init -> creates a package.json file
3. git init - initializing empty git repository
4. create a folder called public (static assets and index.html) and src
5. Add a .gitignore file excluding (at least) the directories node_modules and dist (build folder)

6. Install Babel to compile our code 
   npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
   babel-core - for any transformations on our code
   babel-cli - compile files from the command line
   preset-env - transform ES6+ into to ES5 JS
   preset-react - transform JSX into to ES5 JS

7. create a file .babelrc in the root of the project
   we’re telling babel that we’re going to use the env and react presets.

   Alternatively, we can also provide any plugins option from the Babel parser.
   Babel also has a ton of plugins available that can be used if you only need to transform specific features or some feature you need isn’t covered by env.

8. Install Webpack
   npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader

   Webpack uses loaders to process different types of files for bundling

   Create a new file at the root of the project called webpack.config.js. This file exports an object with webpack’s configuration.

9. install react and react-dom
   npm install --save react@16.5.2 react-dom@16.5.2

- "dev": "webpack serve --mode development --env development"

- package-lock.json - https://docs.npmjs.com/cli/v6/configuring-npm/package-lock-json
It stores an exact, versioned dependency tree rather than using starred versioning like package.json itself (e.g. 1.0.*). This means you can guarantee the dependencies for other developers or prod releases, etc. It also has a mechanism to lock the tree but generally will regenerate if package.json changes.