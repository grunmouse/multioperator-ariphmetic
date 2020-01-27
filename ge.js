const Mop = require('@grunmouse/multioperator');

const oper = new Mop('ge');
const base = (a, b)=>(a >= b);

oper.def(Number, Number, base);
oper.def(BigInt, BigInt, base);

module.exports = oper;
