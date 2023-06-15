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
  let list = ["Satara", "Navi Mumbai", "Nashik", "Chandrapur"];
  return <>{list.map((item) => item)};</>;
}
