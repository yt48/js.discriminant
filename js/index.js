const a = Number(prompt('Enter A'));
const b = Number(prompt('Enter B'));
const c = Number(prompt('Enter C'));

function discriminant(a, b, c){
    return b * b -4 * a * c;
}

function solving(a ,b ,c ){
    const d = discriminant(a, b, c);
    if (d > 0) {
        const x1 = (-b + d*d )/ 2 * a;
        const x2 = (-b - d*d )/ 2 * a;
        return x1 ,x2 ;
    }
    else if (d === 0) {
        const x = -b / (2 * a);
        return x;
    }
    else if (d < 0) {
        return 'No roots';
    }
}
const result =solving (a , b, c);
document.write(result);