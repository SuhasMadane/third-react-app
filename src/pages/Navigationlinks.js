import { Link } from "react-router-dom";

function NavigationLinks() {
  return (
    <>
      <Link to={"/Home"}>Home</Link>
      <Link to={"login"}>Login</Link>
      <Link to={"/register"}>Sign up</Link>
      <Link to={"/displayUsers"}>See Users</Link>
    </>
  );
}
export default NavigationLinks;
