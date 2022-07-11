const Mop = require('@grunmouse/multioperator');

/**
 * Абсолютное значение
 */
const oper = new Mop('sign');

const base = (a)=>(Math.sign(a));
oper.def(Number, base);
oper.def(BigInt, (a)=>(a<0n ? -1 : (a>0n ? 1 : a)));

module.exports = oper;
