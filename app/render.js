import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { App } from './src/components/app/app';

function render() {
    const html = ReactDOMServer.renderToString(<App/>);

    fs.readFile('build/index.html', 'utf8', (err, data) => {
        if (err) throw err;

        const document = data.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`);

        fs.writeFile('build/pageHome.html', document, (err) => {
            if (err) throw err;

            console.log('The file has been saved');
        })
    })
}

render();