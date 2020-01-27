const Mop = require('@grunmouse/multioperator');

const oper = new Mop('ne');
const base = (a, b)=>(a !== b);

oper.def(Number, Number, base);
oper.def(BigInt, BigInt, base);

module.exports = oper;
