const Mop = require('@grunmouse/multioperator');

const oper = new Mop('eq');
const base = (a, b)=>(a.valueOf() === b);

oper.def(Number, Number, base);
oper.def(BigInt, BigInt, base);

module.exports = oper;
