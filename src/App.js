import { useState } from "react";

function App() {
  return (
    <>
      <LoginApp />
    </>
  );
}

export default App;

function LoginApp() {
  let [checkbox, setcheckbox] = useState(false);
  let [user, setUser] = useState({ username: "", pass: "" });
  let handleChangeUserName = (e) => {
    let newUser = { ...user, username: e.target.value };
    setUser(newUser);
  };
  let handleChangePass = (e) => {
    let newUser = { ...user, pass: e.target.value };
    setUser(newUser);
  };
  let addUser = () => {
    console.log(user);
    let uri = `http://localhost:4000/addrecord?username=${user.username}&pass=${user.pass}`;
    fetch(uri);
    let newUser = { username: "", pass: "" };
    setUser(newUser);
    setcheckbox(true);
    setTimeout(() => {
      setcheckbox(false);
    }, 5000);
  };
  return (
    <div className="min-vh-100 min-vw-100 bg-primary-subtle d-flex justify-content-center align-items-center">
      <div
        className="bg-warning-subtle"
        style={{ height: "300px", width: "400px" }}
      >
        <h1 className="d-flex justify-content-center">Login App</h1>
        <input
          type="text"
          className="email form-control"
          placeholder="Enter Username or email"
          value={user.username}
          onChange={handleChangeUserName}
        />
        <input
          type="text"
          className="password form-control mt-2"
          placeholder="Enter password"
          value={user.pass}
          onChange={handleChangePass}
        />
        <h1 className="d-flex justify-content-center mt-3">
          <input type="button" value="Login" onClick={addUser} />
        </h1>
        {checkbox && (
          <div className="alert alert-success">Login Successfully</div>
        )}
      </div>
    </div>
  );
}
