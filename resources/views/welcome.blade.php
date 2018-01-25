<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8"  name="csrf-token" content="{{ csrf_token() }}" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Weltimo</title>
        <link rel="icon" type="image/png" sizes="200*154" href="/img/default/weltimo.png">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Tangerine" rel="stylesheet">
        <!--<link rel="manifest" href="/manifest.json">-->
        <link rel="stylesheet" href="/css/frame/fontsgoogleapi.css">
        <link rel="stylesheet" href="/css/frame/googleIcon.css">
    </head>
    <body>
        <div id="main">
            <div style="position: absolute;top: 0;left:0;right: 0;bottom: 0;background: white;display: flex;justify-content: center;align-items: center;flex-direction: column">
                <img src="/img/default/weltimo.png">
            </div>
            <app></app>
        </div>
        <script src="{{ mix('/js/manifest.js') }}"></script>
        <script src="{{ mix('/js/vendor.js') }}"></script>
        <script src="{{ mix('/js/app.js') }}"></script>
       <!-- <script type="text/javascript">
            if ('serviceWorker' in navigator && 'PushManager' in window) {
                window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/serviceWorker.js').then(function(registration) {
                        // Registration was successful
                        console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    }, function(err) {
                        // registration failed :(
                        console.log('ServiceWorker registration failed: ', err);
                    });
                });
            }
        </script>-->
    </body>
</html>
