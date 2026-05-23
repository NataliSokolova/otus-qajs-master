//Задание 1.
function kolobok(name) {
  if (name === 'дедушка')
    return 'Я от дедушки ушёл';
  
  if (name === 'лиса')
    return 'Меня съели';
}

console.log(kolobok('дедушка')); 
console.log(kolobok('лиса'));    


//Задание 2.

function newYear(name) {
  if (name === 'Дед Мороз') {
    return `${name}! ${name}! ${name}!`;
  }
  
  if (name === 'Снегурочка') {
    return `${name}! ${name}! ${name}!`;
  }
}


console.log(newYear('Дед Мороз'));
console.log(newYear('Снегурочка'));