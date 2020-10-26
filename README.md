# Measure Text

Measure your text width and height in JavaScript

## Getting Start

Install `gz-measure-text`

```
npm install gz-measure-text
```

Import measure text js:

```javascript
import measure from "gz-measure-text";

const text = "This is a long text";
```

### Measure

For default setting:

```javascript
const { width, height } = measure(text);
```

With custom style:

```javascript
const style = `
	font-size: 12px;
	font-family: Roboto, system-ui,PingFang SC,STHeiti,sans-serif;
	line-height: 20px;
`;

const { width, height } = measure(text, style);
```

For custom class name:

```javascript
const { width, height } = measure(text, null, 'user-name-class');
```

For custom element tag name (default `span`):

```javascript
const { width, height } = measure(text, null, null, "div");
console.log("Result: ", width, height);
```

### maxWidth

High performance way to get max width of a set of texts

```javascript
import { maxWidth } from "gz-measure-text";

const text = [
	"This is a long text",
	"todo something",
	"what",
	"hahahah",
];

const res = maxWidth(text);
console.log("maxWidth: ", res);
```
