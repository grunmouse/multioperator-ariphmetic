const Mop = require('@grunmouse/multioperator');

/**
 * Абсолютное значение
 */
const oper = new Mop('abs');

const base = (a)=>(Math.abs(a));
oper.def(Number, base);
oper.def(BigInt, (a)=>(a<0n ? -a : a));

module.exports = oper;
