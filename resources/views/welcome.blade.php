<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="stylesheet preload" as='style' href="{{ asset('css/adminlte.min.css') }}">
    <link rel="stylesheet preload" as='style' href="{{ asset('css/jquery-ui.min.css') }}">






    <title></title>

</head>

<body>
    <div id="app"></div>
    <script src="{{ asset('js/jquery.min.js') }}"></script>
    <script src="{{ asset('js/jquery-ui.min.js') }}"></script>
    <script src="{{ asset('js/adminlte.min.js') }}"></script>
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>

    <script defer type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</body>

</html>
