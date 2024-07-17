## How to reproduce

### Install deps

```shell
npm ci
```

### Run with Node.js 21+

```shell
npm test
```

In console output you will see:
```
Stack is:
 undefined
```

### Run with Node.js <21

```shell
npm test
```

In console output you will the failed test stacktrace
