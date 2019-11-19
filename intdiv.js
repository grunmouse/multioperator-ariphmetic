const Mop = require('@rakov/multioperator');

const oper = new Mop('intdiv');
const base = (a, b)=>(a / b);

oper.def(Number, Number, (a, b)=>(Math.floor(a / b)));
oper.def(BigInt, BigInt, (a, b)=>(a / b));

const toBigInt = (a)=>(BigInt(Math.floot(a)));

oper.def(BigInt, Number, (a, b)=>(a / toBigInt(b)));
oper.def(Number, BigInt, (a, b)=>(toBigInt(a) / b));

module.exports = oper;
