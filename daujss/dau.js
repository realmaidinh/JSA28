//object : đối tượng ( con ng )
// thuộc tính : attribute
// chức năng : 
// khai báo thuộc tính : let biến = {}

// let person = {
//     name:"Bách",
//     age:14,
//     ex_girlfriends:["Chi","Mai","Minh Anh"]
// }

// để truy cập vào thuộc tính của một đối tượng và lấy ra value của thuộc tính đấy , ta làm như sau :
// tên biến.thuộc tính 

// console.log(person.ex_girlfriends[0]);

// let mom ={
//     name:"Thư",
//     age:99,
//     fav:["ngủ","sleep"],
//     job:"luật",
//     address:"172 Ngọc khánh",
// }

// console.log(mom.name);
// console.log(mom.age);
// console.log(mom.fav[1]);
// console.log(mom.job);
// console.log(mom.address);

//                                                      Function(hàm): chức năng 

//để function chạy được mình phải gọi tên nó 
// Kiểu 1 : Function không có đầu vào ( k có tham số )
// Kiểu 2 : Function có đầu vào ( có tham số : prameter)
// Kiểu 3 : Function có return

// function sayHello(){
//     console.log("Hello Bảo");
// }

// sayHello();

// Kiểu 2 : Function có đầu vào ( có tham số : prameter)

// function coutPlus(x , y){
//     let t = x + y;s
//     console.log(`${x} + ${y} = ${t}`);
// }

// coutPlus(10,20);

// function coutMinus(x , y ){
//     let t = x + y;
//     console.log(`${x} - ${y} = ${t}`);
// }

// coutMinus(10,20)

// function coutMultiply(x , y){
//     let t = x * y;
//     console.log(`${x} * ${y} = ${t}`);
// }

// coutMultiply(10,20)

// function coutColon(x , y){
//     let t = x/y;
//     console.log(`${x}/${y} = ${t}`);
// }

// coutColon(10,20)

// Kiểu 3 : Function có return

// function myFullName(){
//     return "Trần Xuân Bách";
// }
// console.log(myFullName());


// //vidu 
// function myFullName(name){
//     return name;
// }
// console.log(myFullName("Trần Xuân Bách"));


//                                                  for loop : vòng lặp
// for(vị trí bắt đầu ; điều kiện để vòng lạp chạy , bước nhảy sau 1 mỗi lần lặp)
// Kiểu 1 : Function không có đầu vào ( k có tham số )
// Kiểu 2 : Function có đầu vào ( có tham số : prameter)
// Kiểu 3 : Function có return
// let t = 1;
// t+= 2; //t = t + 2
// console.log(t);
// for(let i = 0; i < 10; i+=2){
//     console.log(i);
// }

// let t = 1;
// t+= 1; //t = t + 2
// console.log(t);
// for(let i = 10; i >= 0; i--){
//     console.log(i);
// }

// for(let i = 0; i <= 100; i++){
//     if(i % 3 == 0 && (i - 2)%10 == 0 && i % 12 ==0){
//         console.log(i);
//     }
// }


// function coutMultiply(a , b , c , d , e ){
//     let t = a * b * c * d * e;
//     console.log(`${a} * ${b} * ${c} * ${d} * ${e} = ${t}`);
// }

// coutMultiply(5,4,3,2,1)



// console.log(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);



// let a = prompt("Nhập số :");
// let b = prompt("Nhập số :");
// console.log(a,b);

// for(vị trí bắt đầu ; điều kiện để vòng lạp chạy , bước nhảy sau 1 mỗi lần lặp)
// Kiểu 1 : Function không có đầu vào ( k có tham số )
// Kiểu 2 : Function có đầu vào ( có tham số : prameter)
// Kiểu 3 : Function có return

// Bai1
// let s = "";
// for(let i = 1; i < 21; i++){
//     s = s + " " + i;
// }
// console.log(s);

// Bai2
// let a = Number(prompt("Nhập số"))
// let b = Number(prompt("Nhập số"))
// let s = "";
// let t = 0;

// for(let i = a; i < b; i++){
//     s = s + " " + a;
// }
// console.log(s);

// for(let i = a; i < b; i++){
//     t = t + i;
// }
// console.log(t);


// let t = 1;
// let input = Number(prompt("Enter number"))
// for(let i = 1; i <= input; i++){
//     t = t * i;
// } 
// console.log("Giai thừa của 1 chuỗi là : " + t);
// console.log(`Giai thừa của 1 chuỗi là : ${t}`);

// let student = {
//     price: 100 
// }
// if(student.price < 100){
//     console.log("Xúc ảo");
// } else if (student.price == 100){
//     console.log("đúng giá");
// } else (student.price > 100){
//     console.log("Giá ảo");
// }
let computers = [
{
   laptopName: "ROG",
   price: 100,
},
{
  laptopName: "DELL",
  price: 200,
 },
  
 {
  laptopName: "ASUS",
   price: 300,
 },
];

for(let i = 0; i < computers.length; i++){
    if (computers[i].price == 200) {
    console.log(computers[i].laptopName);
    }
}
