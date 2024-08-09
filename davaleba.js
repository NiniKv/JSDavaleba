// 1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს
function Number(m, n) {
    if (m > n) {
        return m;
    } else if (n > m) {
        return n;
    } else {
        return 0; 
    }
}
console.log(Number(5, 3));

// 2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
function Numbers(a, b) {
    return a + b;
}
console.log(Numbers(5, 3));

// 3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)
function printName() {
    const firstName = "Nini";  
    const lastName = "Kvaratskhelia";  

    console.log(firstName+lastName);
}
// 4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
function getFullName(firstname, lastname) {
    return firstname + " " + lastname;
}
const fullName = getFullName("Nini", "Kvaratskhelia");
console.log(fullName);

// 5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)
function productOfNumbers(n) {
    let product = 1;
    for (let m = 1; m <= n; m++) {
        product *= m;
    }
    return product;
}
console.log(productOfNumbers(3));

// 6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)
let student = {
    firstName: "Nini",
    lastName: "DKvaratskhelia",
    age: 25,
    scores: [4, 7, 5, 3, 2],
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(student.fullName());

// 7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს
function sumOfScores(scores) {
    let sum = 0;
    for (let score of scores) {
        sum += score;
    }
    return sum;
}
console.log(sumOfScores(student.scores)); 
