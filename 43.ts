//Namespace Merging
namespace MyNamespace {
    export const foo = "foo";
  }
  
  namespace MyNamespace {
    export const bar = "bar";
  }
  
  console.log(MyNamespace.foo); // "foo"
  console.log(MyNamespace.bar); // "bar"