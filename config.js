SystemJS.config({
      baseURL: 'https://unpkg.com/',
      defaultExtension: true,
      packages: {
        ".": {
          main: './app.js',
          defaultExtension: 'js'
        }
      },
      meta: {
        '*.js': {
          'babelOptions': {
            react: true
          }
        }
      },
      map: {
        'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
        'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
        'react': 'react@17.0.1/umd/react.development.js',
        'react-dom': 'react-dom@17.0.1/umd/react-dom.development.js',
        'react/jsx-runtime': 'react@17.0.1/umd/react.development.js',
        //classname is not working yet
        'classnames': 'classnames@2.2.6/index.js'
      },
      transpiler: 'plugin-babel'
    });

    SystemJS.import('./app').catch(console.error);
  