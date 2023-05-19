//Module Merging
// file1.ts
// export const foo = "foo";

// file2.ts
// export const bar = "bar";

// main.ts
import { foo } from "./file1";
import { bar } from "./file2";

console.log(foo); // "foo"
console.log(bar); // "bar"