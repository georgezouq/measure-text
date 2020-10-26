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
	"dvide voff LTD",
	"世纪天华集团公司",
	"中国电子科技集团公司第五十四研究所",
	"云飞电子科技集团",
	"京东商城",
	"会员客户",
	"北京佳运科贸有限公司",
	"北京博达仪器有限公司",
	"北京燕飞塑料厂",
	"北京蓝天科技公司",
	"北京西山科电集团",
	"大地电子科技公司",
	"天乐电子集团",
	"天津鹏程电子有限公司",
	"星空电子公司",
	"泰山数码科技公司",
	"洪胜达科技有限公司",
	"淘宝网",
	"线上客户",
	"美华集团",
	"黄河科技集团"
];

const res = maxWidth(texts);
console.log("Result: ", res);
