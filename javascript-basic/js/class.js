class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    describe() {
        console.log('この商品名は' + this.name + 'です。');
    }
}
// インスタンス化する
const shampoo = new Product('シャンプー', 500, '生活雑貨');
const coffee = new Product('コーヒー', 1500, '飲料');
// インスタンス（オブジェクト）の値を出力する
console.log(shampoo);
console.log(coffee);

shampoo.describe();

//通常のオブジェクトにメソッドを定義する
const user = {
    name: '侍太郎',
    age: 36,
    gender: '男性',
    greet: () => {
        console.log('宜しくお願いします！');
    }
}
user.greet();