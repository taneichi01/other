console.log(45 + 18);

console.log(45 > 18);

console.log('5' == 5);

console.log('5' === 5);

let num = Math.floor(Math.random() * 5);

console.log(num);

if (num === 4) {
    console.log('大当たり');
}
 // 変数numの値が3であれば、「当たりです」という文字列を出力する
 else if (num === 3) {
    console.log('当たりです');
}
else {
    console.log('はずれ')
}

 // 変数numに0～4までのランダムな整数を代入する
num = Math.floor(Math.random() * 5);

console.log(num);

switch (num) {
  case 2:
    console.log('小吉です');
    break;
  case 3:
    console.log('中吉です');
    break;
  case 4:
    console.log('大吉です');
    break;
    default:
        console.log('末吉');
}

