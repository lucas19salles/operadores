let velocidade = 80;

// Sobre Operador E(AND) &&
console.log(velocidade == 80 && velocidade <= 80);
console.log(velocidade == 80 && velocidade <= 58);
console.log(velocidade == 70 && velocidade <= 80);
console.log(velocidade == 70 && velocidade <= 70);

// Sobre Operador OU(OR) ||
console.log(velocidade == 80 || velocidade <= 80);
console.log(velocidade == 80 || velocidade <= 58);
console.log(velocidade == 70 || velocidade <= 80);
console.log(velocidade == 70 || velocidade <= 70);

// Sobre Operador NÃO(NOT) !
console.log(!(velocidade == 70));
