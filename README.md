# MOMO

MoMo ( MOnarch MOnitor) is a Vue.js demo app for an application of the job kind.

## Kia ora,

If you are reading this, thank you kindly for your time! I did not have a Vue project at hand that I could 
share, so I did a little hackaton over the weekend instead. 

Due to time restrictions I tried to spread my time and efforts over a range of aspects in the development process, 
from UI/UX to DX. Some of these tools are new to me ( like Pinia or Composition API ), but I wanted to demonstrate my 
adaptability by implementing them anyway and not only sticking to what I already know.  

This is by no means a finished product, but I hope this project can serve as a 'sneak preview' of my code style and 
capabilities :)

Please feel free to provide any feedback or request any additional skill or knowledge demonstrations, happy to oblige! 

__This hackaton was made possible by coffee, the bad weather and Yaeji ♬♫♪◖(●◡●)◗♪♫♬__

---

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
