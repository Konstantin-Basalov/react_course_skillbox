export const indexTemplate = (content) =>
    `
    <!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="/static/client.js" type="application/javascript"></script>
    <title>React App homework</title>
</head>
<body>
    <div id="root">${content}</div>
</body>
</html>
    `
