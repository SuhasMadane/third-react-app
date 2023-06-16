import { useState } from "react";

function Register() {
  let [checkbox, setcheckbox] = useState(false);
  let [user, setUser] = useState({
    username: "",
    email: "",
    mobileno: "",
    newpassword: "",
    confirmpassword: "",
  });

  let handleUserNameAction = (e) => {
    let newUser = { ...user, username: e.target.value };
    setUser(newUser);
  };
  let handleEmailAction = (e) => {
    let newUser = { ...user, email: e.target.value };
    setUser(newUser);
  };
  let handleMobileNoAction = (e) => {
    let newUser = { ...user, mobileno: e.target.value };
    setUser(newUser);
  };
  let handleNpasswordAction = (e) => {
    let newUser = { ...user, newpassword: e.target.value };
    setUser(newUser);
  };
  let handleCpasswordAction = (e) => {
    let newUser = { ...user, confirmpassword: e.target.value };
    setUser(newUser);
  };
  let adduser = (e) => {
    console.log(user);
    let uri = `http://localhost:4000/adduser?username=${user.username}&&email=${user.email}&&mobileno=${user.mobileno}&&newpassword=${user.newpassword}&&confirmpassword=${user.confirmpassword}`;
    fetch(uri);
    let newUser = {
      username: "",
      email: "",
      mobileno: "",
      newpassword: "",
      confirmpassword: "",
    };
    setUser(newUser);
    setcheckbox(true);
    setTimeout(() => {
      setcheckbox(false);
    }, 4000);
  };
  return (
    <div className="min-vh-100 min-vw-100 bg-dark-subtle d-flex justify-content-center align-items-center">
      <div
        style={{ height: "350px", width: "400px" }}
        className="bg-primary-subtle d-flex justify-content-center align-items-center"
      >
        <div
          style={{ height: "90%", width: "80%" }}
          className="d-flex flex-column justify-content-evenly"
        >
          <h1 className="d-flex justify-content-center">Register here</h1>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={user.username}
            onChange={handleUserNameAction}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Email Id"
            value={user.email}
            onChange={handleEmailAction}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Mobile No"
            value={user.mobileno}
            onChange={handleMobileNoAction}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Create new password"
            value={user.newpassword}
            onChange={handleNpasswordAction}
          />
          <input
            type="text"
            className=" password form-control"
            placeholder="Confirm password"
            value={user.confirmpassword}
            onChange={handleCpasswordAction}
          />
          <input
            type="button"
            value="Registr"
            className="bg-primary"
            onClick={adduser}
          />
          {checkbox && (
            <div
              className="alert alert-success d-flex justify-content-center align-items-center"
              style={{ height: "10px" }}
            >
              Registered Successfully
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Register;
