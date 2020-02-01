# @distributed/tooling

> Tooling for distributed applications.

## Colour

1. Get the name of a given colour using `/colour/name/${colour}`.

```bash
curl https://tooling.distributed.vc/colour/name/ff7473
```

```json
{
  "status": 4,
  "name": "Embarrassment",
  "hex": "#ff7777",
  "delta": 1.9007932309436872,
  "message": "Perceptible through close observation"
}
```

2. Get a random colour and its name using `/colour/random`.

```bash
curl https://tooling.distributed.vc/colour/random
```

```json
{
  "hex": "#841fd0",
  "name": "Puissant Purple"
}
```
