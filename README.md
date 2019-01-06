# choak

An example chat application used to demonstrate [Deno](https://deno.land/) and
[Oak](https://github.com/kitsonk/oak/).

## Usage

At the moment, you need to clone this repository locally:

```
$ git clone https://github.com/kitsonk/choak.git
```

You need to then do an install and build of the client:

```
$ cd choak/client
$ yarn install
$ yarn build
```

You then need to start the server locally, the first time you do this, all the dependencies for the server will be downloaded by Deno and cached:

```
$ deno server/main.ts --allow-net
Compiling choak/server/main.ts
Downloading https://raw.githubusercontent.com/kitsonk/oak/master/mod.ts...
Downloading https://deno.land/x/std@v0.2.4/colors/main.ts...
Downloading https://raw.githubusercontent.com/kitsonk/oak/master/application.ts...
Downloading https://raw.githubusercontent.com/kitsonk/oak/master/context.ts...
Downloading https://raw.githubusercontent.com/kitsonk/oak/master/httpError.ts...
Downloading https://raw.githubusercontent.com/kitsonk/oak/master/middleware.ts...
Downloading https://raw.githubusercontent.com/kitsonk/oak/master/router.ts...
Downloading https://raw.githubusercontent.com/kitsonk/oak/master/send.ts...
Downloading https://raw.githubusercontent.com/kitsonk/oak/master/types.ts...
Downloading https://raw.githubusercontent.com/kitsonk/oak/master/deps.ts...
Downloading https://raw.githubusercontent.com/kitsonk/oak/master/request.ts...
Downloading https://raw.githubusercontent.com/kitsonk/oak/master/response.ts...
Downloading https://deno.land/x/std@v0.2.4/net/http.ts...
Downloading https://deno.land/x/std@v0.2.4/net/http_status.ts...
Downloading https://deno.land/x/std@v0.2.4/path/index.ts...
Downloading https://raw.githubusercontent.com/jshttp/mime-db/v1.37.0/db.json...
Downloading https://deno.land/x/std@v0.2.4/net/bufio.ts...
Downloading https://deno.land/x/std@v0.2.4/net/textproto.ts...
Downloading https://deno.land/x/std@v0.2.4/net/util.ts...
Downloading https://deno.land/x/std@v0.2.4/path/constants.ts...
Downloading https://deno.land/x/std@v0.2.4/path/interface.ts...
Downloading https://raw.githubusercontent.com/kitsonk/oak/master/encoding.ts...
Downloading https://raw.githubusercontent.com/kitsonk/oak/master/media_types.ts...
Downloading https://raw.githubusercontent.com/kitsonk/oak/master/pathToRegExp.ts...
Downloading https://raw.githubusercontent.com/kitsonk/oak/master/util.ts...
Downloading https://deno.land/x/std@v0.2.4/colors/styles.ts...
Compiling choak/server/deps.ts
Compiling https://raw.githubusercontent.com/kitsonk/oak/master/mod.ts
Compiling https://raw.githubusercontent.com/kitsonk/oak/master/application.ts
Compiling https://raw.githubusercontent.com/kitsonk/oak/master/context.ts
Compiling https://raw.githubusercontent.com/kitsonk/oak/master/httpError.ts
Compiling https://raw.githubusercontent.com/kitsonk/oak/master/deps.ts
Compiling https://deno.land/x/std@v0.2.4/net/http.ts
Compiling https://deno.land/x/std@v0.2.4/net/bufio.ts
Compiling https://deno.land/x/std@v0.2.4/net/util.ts
Compiling https://deno.land/x/std@v0.2.4/net/textproto.ts
Compiling https://deno.land/x/std@v0.2.4/net/http_status.ts
Compiling https://deno.land/x/std@v0.2.4/path/index.ts
Compiling https://deno.land/x/std@v0.2.4/path/constants.ts
Compiling https://raw.githubusercontent.com/jshttp/mime-db/v1.37.0/db.json
Compiling https://raw.githubusercontent.com/kitsonk/oak/master/types.ts
Compiling https://raw.githubusercontent.com/kitsonk/oak/master/request.ts
Compiling https://raw.githubusercontent.com/kitsonk/oak/master/encoding.ts
Compiling https://raw.githubusercontent.com/kitsonk/oak/master/response.ts
Compiling https://raw.githubusercontent.com/kitsonk/oak/master/media_types.ts
Compiling https://raw.githubusercontent.com/kitsonk/oak/master/middleware.ts
Compiling https://raw.githubusercontent.com/kitsonk/oak/master/router.ts
Compiling https://raw.githubusercontent.com/kitsonk/oak/master/pathToRegExp.ts
Compiling https://raw.githubusercontent.com/kitsonk/oak/master/util.ts
Compiling https://raw.githubusercontent.com/kitsonk/oak/master/send.ts
Compiling https://deno.land/x/std@v0.2.4/colors/main.ts
Compiling https://deno.land/x/std@v0.2.4/colors/styles.ts
Compiling choak/server/handleError.ts
Compiling choak/server/logger.ts
Compiling choak/server/responseTime.ts
Compiling choak/server/staticContent.ts
Starting on: 127.0.0.1:8000
```

The application should now be accessible on `http://localhost:8000/`.

---

Copyright 2019 Kitson P. Kelly. All rights reserved. MIT License.
