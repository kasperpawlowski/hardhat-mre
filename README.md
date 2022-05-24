Steps to reproduce:

```
yarn
npx hardhat test
```

Issue occurred for the first time in the latest hardhat 2.9.6 release. To prove it, make the following change to the `package.json` file:

`"hardhat": "^2.9.6" -> "hardhat": "2.9.5"`

then run:

```
yarn
npx hardhat test
```