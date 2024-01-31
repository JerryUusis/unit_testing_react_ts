# Unit testing React with Jest

If you want to write tests for your React/TypeScript application with Jest, you need to do some configuration and install some libraries get Jest tests running. Application in the repo was built using Vite.

## Install test utilities as dev dependencies

### **List of required libraries**

- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) and [react-test-renderer](https://legacy.reactjs.org/docs/test-renderer.html): These libraries are crucial for testing React components in a way that simulates real user interactions. @testing-library/react provides utilities to query and interact with React components rendered in a virtual DOM, while react-test-renderer allows you to render React components to a JavaScript object for inspection.
- [jest](https://jestjs.io/docs/getting-started): The testing framework for JavaScript/TypeScript applications.
- [@types/jest](https://www.npmjs.com/package/@types/jest): TypeScript types for Jest. These types enhance the development experience by providing TypeScript-specific definitions for Jest, ensuring type safety when working with Jest in a TypeScript project.
- [ts-jest](https://www.npmjs.com/package/ts-jest): is a TypeScript preprocessor for Jest, allowing Jest to work seamlessly with TypeScript. It enables Jest to understand and transpile TypeScript code during the testing process.

- [jest-environment-jsdom](https://github.com/jestjs/jest#readme): This library sets up the Jest environment to mimic a browser-like environment using jsdom. It ensures that your React components can be tested in an environment that closely resembles the browser.
- [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/): Extends Jest's expect functionality with additional matchers specifically designed for testing DOM elements. This library enhances the readability and expressiveness of your tests when dealing with React components and the DOM.

### **React testing library and renderer**

```bash
npm install --save-dev @testing-library/react react-test-renderer
```

### **Jest**

```bash
npm install --save-dev jest
```

### **@types/jest**

```bash
npm i --save-dev @types/jest
```

### **ts-jest** 

```bash
npm install --save-dev ts-jest
```

### **jest-environment-jsdom**

**Note!** remember to include `jest-environment-jsdom` in the `jest.config.cjs`

```bash
npm install --save-dev jest-environment-jsdom
```

### **Install jest-dom modules on dev-dependencies**

```bash
npm i --save-dev @testing-library/jest-dom
```
Remember to import the module to the test file with command:

```js
import '@testing-library/jest-dom'
```

## Config files

### **Jest configuration**

Create `jest.config.cjs` file

```js
// jest.config.cjs

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
...
}
```

### **TypeScript configuration**

Update compiler options in `tsconfig.json`.

**Note!** Might cause some issues when importing from CommonJS and ES modules

```json
// tsconfig.json

{
  "compilerOptions": {

    // ... other options

    "esModuleInterop": true
  },
  // ... other configurations
}
```

## Scripts

Create a script in `package.json` for running tests with Jest with `jest.config.cjs`

```json
// package.json

"scripts": { 
    "test": "jest --config jest.config.cjs"
  }
```

After the script is added in `package.json`, it will run the tests with Jest using jest.config.cjs file for configurations.

```bash
npm test
```

## Using jest

### **Setup**

1. Create the Test Folder:
    -  In the root level of your project, create a folder named __tests__. Jest is configured to automatically discover and run test files located in this folder.

2. Test File Naming Convention: 
    - When creating test files, follow the naming convention by appending `.test` before the file extension (`.ts` or `.tsx`). For example:
        - For TypeScript files: `sample.test.ts`
        - For TypeScript files with JSX syntax: `sample.test.tsx`

### **Sample syntax for writing tests with Jest**

```js
// sample.test.ts

describe("Sample test", () => {
    test("Testing if true is true", () => {
        expect(true).toBe(true)
    }
    )
})
```

Check the `__tests__` folder in the repo for more examples