var isEven = false;
var peshoUser = {
    name: "Pesho",
    age: 24,
};
peshoUser.age = 1;
var anotherUserList = [
    { firstName: "Ivan", id: 1 },
    { firstName: "George", id: 2 },
    { firstName: "Miro", id: 3 },
];
anotherUserList.forEach(function (firstName, id) {
    console.log("".concat(id, ": ").concat(firstName));
});
