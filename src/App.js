import { useState } from "react";

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
  let [list, setList] = useState([
    "Satara",
    "Navi Mumbai",
    "Nashik",
    "Chandrapur",
  ]);
  let addCity = () => {
    let newList = [...list, "Delhi", "Beed"];
    console.log(newList);
    setList(newList);
  };

  return (
    <>
      <input type="button" value="AddNewCity" onClick={addCity} />

      {list.map((item) => (
        <>
          <h1>Hello {item}</h1>
        </>
      ))}
    </>
  );
}
