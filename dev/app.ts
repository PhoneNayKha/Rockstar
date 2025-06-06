let num = 123;

type User = {
  name: string;
  age: number;
  gender?: "male" | "female";
};

let alice: User = {
  name: "Alice",
  age: 22,
};

interface Student {
  name: string;
  age: number;
  grade?: number;
}

let bob: Student = {
  name: "Bob",
  age: 15,
};

function hello(user: { name: string }) {
  return user.name;
}

type Res<T> = {
  data: T;
  status: 200 | 400;
};

const userResponse: Res<User> = {
  data: { name: "Tom", age: 40 },
  status: 200,
};

const studentResponse: Res<Student> = {
  data: { name: "Susan", age: 18 },
  status: 200,
};
