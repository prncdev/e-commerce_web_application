import { singUPWithGooglePopUp, getUserDocumentFromAuth } from "../../utils/DB/FireStore";

function SignUp() {

  // The function should be async/await because it will make a network request which takes some time to resolve.
  const logGoogleUser = async function () {
    const { user } = await singUPWithGooglePopUp();
    getUserDocumentFromAuth(user);
  }

  return (
    <section>
      <h1>This is Sign Up page</h1>
      <button onClick={logGoogleUser}>Sign up with goolge</button>
    </section>
  )
}

export default SignUp;