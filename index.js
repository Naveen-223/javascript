console.log("start");

const result = fetch("https://jsonplaceholder.typicode.com/posts/")
  .then((res) => res.json())
  .then((res) => res.data);
console.log(result);

console.log("end");
