function App() {
  return (
    <>
      <h1>Hello World</h1>
      <MessageDemo name="Suhas" email="suhasmadane81@gmail.com" />
      <MessageDemo name="Tejas" />
      <MessageDemo name="Suraj" email="suraj3@gmail.com" />
      <MessageDemo name="Vaibhav" />
    </>
  );
}
export default App;

function MessageDemo(props) {
  return (
    <>
      <h1>HeLLLo {props.email}</h1>
    </>
  );
}
