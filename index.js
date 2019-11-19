
const opers = [
	require('./add.js'),
	require('./sub.js'),
	require('./neg.js'),
	require('./mul.js'),
	require('./div.js'),
	require('./mod.js'),
	require('./pow.js')
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

/**
 * 
 * {Multioperator} add 
 * {Multioperator} sub
 * {Multioperator} neg
 * {Multioperator} mul
 * {Multioperator} div
 * {Multioperator} mod
 * {Multioperator} pow
 *
 * {Symbol} ADD
 * {Symbol} SUB
 * {Symbol} NEG
 * {Symbol} MUL
 * {Symbol} DIV
 * {Symbol} MOD
 * {Symbol} POW
 *
 *
 *
 */


module.exports = {
	operators,
	symbols
};