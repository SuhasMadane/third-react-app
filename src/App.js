function App() {
  return (
    <>
      <h1>Hello World</h1>
      <MessageDemo name="Suhas" email="suhasmadane81@gmail.com" />
      <MessageDemo name="Tejas" id="107" />
      <MessageDemo name="Suraj" email="suraj3@gmail.com" />
      <MessageDemo name="Vaibhav" id="108" />
    </>
  );
}
export default App;
//destructring
function MessageDemo({ email, id }) {
  return (
    <>
      <h1>HeLLLo {id}</h1>
    </>
  );
}
