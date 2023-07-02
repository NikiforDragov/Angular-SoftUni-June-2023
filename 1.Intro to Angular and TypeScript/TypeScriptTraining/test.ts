let isEven: boolean = false;

type User = {
  name: string;
  age: number;
};

const peshoUser = {
  name: "Pesho",
  age: 24,
} as User;

interface AnotherUser {
  firstName: string;
  id: number;
}

peshoUser.age = 1;

const anotherUserList = [
  { firstName: "Ivan", id: 1 },
  { firstName: "George", id: 2 },
  { firstName: "Miro", id: 3 },
] as AnotherUser[];

anotherUserList.forEach((firstName, id) => {
  console.log(`${id}: ${firstName}`);
});
