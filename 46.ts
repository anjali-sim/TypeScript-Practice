interface User {
    name: string;
    sex?: string;
  }
  let user: User = { // OK
    name: "Bytefer",
  };
  user = { // Ok
    name: "Bytefer",
    sex: "male",
  };
  let user1: User = {
    name: "Bytefer",
    sex: "male",
    age: 30 //Extra not allowed
  };

//Index Signature
  interface User {
    name: string;
    sex?: string;
    [propName: string]: any; // Index Signatures
  }
  let user: User = {
    name: "Bytefer",
    sex: "male",
    age: 30,
    email: "bytefer@gmail.com"
  };

  //Generic Interface
  interface KeyPair<T, U> {
    key: T;
    value: U;
  }
  let kv1: KeyPair<number, string> = { key: 1, value: "Bytefer" };

  //Extends Interface
  interface Point1D {
    x: number;
  }
  interface Point2D extends Point1D {
    y: number;
  }
  interface Point3D extends Point2D {
    z: number;
  }
  const point1D = { x: 0 };
  const point2D = { x: 0, y: 0 };
  const point3D = { x: 0, y: 0, z: 0 };