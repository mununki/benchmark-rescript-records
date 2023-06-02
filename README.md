### Performance

#### Tested on Node.js v16.14.0, Apple M1 Air
```
Normal record x 7.29 ops/sec ±0.96% (23 runs sampled)
Record with optional x 5.08 ops/sec ±3.61% (17 runs sampled)
Record with spread x 5.30 ops/sec ±1.20% (18 runs sampled)
Record with spread and optional x 3.37 ops/sec ±0.96% (13 runs sampled)
Fastest is Normal record
```

### How to bench

```sh
$ yarn build && yarn bench
```
