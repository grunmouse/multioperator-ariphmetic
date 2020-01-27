const Mop = require('@grunmouse/multioperator');

const oper = new Mop('add');
const base = (a, b)=>(a+b);

oper.def(Number, Number, base);
oper.def(BigInt, BigInt, base);

module.exports = oper;
