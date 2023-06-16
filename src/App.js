import { useRef, useState } from "react";

function App() {
  return (
    <>
      <ListDemo />
    </>
  );
}
export default App;
//destructring
function ListDemo() {
  let inputref = useRef();
  let [list, setList] = useState([
    "Satara",
    "Navi Mumbai",
    "Nashik",
    "Chandrapur",
  ]);
  let addCity = () => {
    let inputvalue = inputref.current.value;
    let newList = [...list, inputvalue];
    console.log(newList);
    setList(newList);
    inputref.current.value = "";
  };

  return (
    <>
      <input type="text" className="form-control" ref={inputref} />
      <input type="button" value="AddNewCity" onClick={addCity} />

      {list.map((item) => (
        <>
          <h1>Hello {item}</h1>
        </>
      ))}
    </>
  );
}
