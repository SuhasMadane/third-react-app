function App() {
  return (
    <>
      <h1>Hello World</h1>
      <MessageDemo name="Suhas" email="suhasmadane81@gmail.com" />
    </>
  );
}
export default App;

function MessageDemo(props) {
  return (
    <>
      <h1>HeLLLo Suhas {props.name}</h1>
    </>
  );
}
