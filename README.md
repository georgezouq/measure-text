# Measure Text

Measure your text width and height in JavaScript

### Getting Start

```
npm install measure-text
```

```js
import measure from "measure-text";

const style = `
	font-size: 12px;
	font-family: Roboto, system-ui,PingFang SC,STHeiti,sans-serif;
	line-height: 20px;
`;

const text = "This is a long text";

const { width, height } = measure(text, style);
console.log("Result: ", width, height);
```
