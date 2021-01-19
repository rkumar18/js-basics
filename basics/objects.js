let mybook1 = {
  title: "c book",
  price: "500",
  isbn: "fgge5",
};
let mybook2 = {
  title: "python book",
  price: "300",
  isbn: "fggo5",
};

let mybook3 = {
  title: "c++ book",
  price: "400",
  isbn: "fggu5",
};

console.log(mybook1);
let changemybook = function (myobj) {
  console.log(`file name is ${myobj.title}`);
};
changemybook(mybook1);

const firstName = "req.body.firstName";
const lastName = "req.body.lastName";
const email = "req.body.email";
const address = "req.body.address";
const phone = "req.body.phone";
const password = "req.body.password";
const confirmPassword = "req.body.password";
const userData = [
  { email: email },
  { address: address },
  { phone: phone },
  { firstName: firstName },
  { lastName: lastName },
  { address: address },
  { confirmPassword: confirmPassword },
];
console.log(userData);
