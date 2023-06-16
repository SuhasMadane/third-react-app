import { useNavigate } from "react-router-dom";

function NavigationButtons() {
  const navigation = useNavigate();
  let goToHomePage = () => {
    navigation("/Home");
  };
  let goToLoginPage = () => {
    navigation("/login");
  };
  let goToSignUpPage = () => {
    navigation("/register");
  };
  let goToUserListPage = () => {
    navigation("/displayUsers");
  };
  return (
    <>
      <input type="button" value="HOME" onClick={goToHomePage} />
      <input type="button" value="LOGIN" onClick={goToLoginPage} />
      <input type="button" value="SIGN UP" onClick={goToSignUpPage} />
      <input type="button" value="SEE USERS" onClick={goToUserListPage} />
    </>
  );
}
export default NavigationButtons;
