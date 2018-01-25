importScripts('/sw-toolbox.js');
toolbox.precache(['http://localhost:8000', '/site.css', '/img/default/weltimo.png']);
toolbox.router.get('/*', toolbox.networkFirst, {origin: 'http://localhost:8000'});