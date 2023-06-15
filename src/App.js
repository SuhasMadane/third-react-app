function App() {
  return (
    <>
      <h1>Hello World</h1>
      <ListDemo />
    </>
  );
}
export default App;
//destructring
function ListDemo() {
  let data = "Hello World";
  let list = ["", "", "", ""];

  return (
    <>
      {list.map((item) => (
        <>
          <h1>{data}</h1>
        </>
      ))}
      ;
    </>
  );
}
