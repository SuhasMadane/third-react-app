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
  let [list, setList] = useState([]);
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
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            deserunt incidunt qui placeat. Architecto beatae consectetur magni
            aspernatur velit veritatis soluta a, nihil similique? Eos vel quo
            iste recusandae obcaecati.
          </p>
          <div>
            <input type="button" value="&#128077;" />
            <input type="button" value="&#128078;" />
          </div>
        </>
      ))}
    </>
  );
}
