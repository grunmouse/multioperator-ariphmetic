/*
Операция проверки равенства для чисел с плавающей точкой
*/
const Mop = require('@grunmouse/multioperator');

const oper = new Mop('approx');

const base = (a, b)=>(Math.abs(a - b) <= Number.EPSILON);
oper.def(Number, Number, base);

module.exports = oper;
