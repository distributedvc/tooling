# tooling

> Tooling for distributed apps.

## Colour

Get the name of a given colour using `/colour/name/${colour}`.

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

Get a random colour and its name using `/colour/random`.

```bash
curl https://tooling.distributed.vc/colour/random
```

```json
{
  "hex": "#841fd0",
  "name": "Puissant Purple"
}
```
