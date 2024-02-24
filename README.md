# setup

```bash
curl -fsSL https://bun.sh/install | bash
```

# run app

```bash
cd MockServer
bun dev
```

# config

```bash
vim .env
```

.env content

```
HOST=127.0.0.1
PORT=8082
```

# run test

```bash
curl -X POST -H 'content-type: application/json' -d '{"test": 123}' http://127.0.0.1:8082/
curl http://127.0.0.1:8082/abc/123
```
