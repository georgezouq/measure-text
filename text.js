console.log("------------------ measure ------------------");

var style = `
	font-size: 12px;
	font-family: Roboto, system-ui,PingFang SC,STHeiti,sans-serif;
	line-height: 20px;
`;

var text = "This is a long text";

var { width, height } = measure(text, style);
console.log("Result: ", width, height);

console.log("------------------ maxWidth ------------------");

const texts = [
	"This is a long text",
	"todo something",
	"what",
	"hahahahssssssssssssssss",
];

const res = maxWidth(texts);
console.log("Result: ", res);
