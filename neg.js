const Mop = require('@grunmouse/multioperator');

const oper = new Mop('neg');
const base = (a)=>(-a);

oper.def(Number, base);
oper.def(BigInt, base);

module.exports = oper;
