import { useState } from "react";

function DisplayUsers() {
  let [userList, setuserList] = useState([]);
  let getUserData = async () => {
    let uri = "http://localhost:4000/findAllUsers";
    let res = await fetch(uri);
    let list = await res.json();
    console.log(list);
    setuserList(list);
  };
  return (
    <div className="bg-warning-subtle ">
      <h1>User List</h1>
      <input
        type="button"
        value="Get User data from Server"
        onClick={getUserData}
      />
      {userList.map((item) => {
        <div>
          {item.username} {item.email} {item.mobilno}
          {item.confirmpassword}
        </div>;
      })}
    </div>
  );
}
export default DisplayUsers;
