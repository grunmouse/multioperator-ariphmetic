
const opers = [
	require('./add.js'),
	require('./sub.js'),
	require('./neg.js'),
	require('./mul.js'),
	require('./div.js'),
	require('./mod.js'),
	require('./pow.js'),
	
	require('./eq.js'),
	require('./ne.js'),
	require('./lt.js'),
	require('./le.js'),
	require('./gt.js'),
	require('./ge.js')
];

const operators = {};
const symbols = {};

opers.forEach((oper)=>{
	let name = oper.name;
	let NAME = name.toUpperCase();
	let key = oper.key;
	operators[name] = oper;
	symbols[NAME] = key;
});




module.exports = {
	operators,
	symbols
};