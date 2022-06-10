const obj = {
    star1: '*',
    star2: '**',
    star3: '***',
    star4: '****',
    star5: '*****',
    star6: '******',
    star7: '*******',
}
for(let star in obj){
    console.log(obj[star])
}


let star = '*';
while (star.length < 8) {
    console.log(star);
    star = star + '*'
}

for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
}



