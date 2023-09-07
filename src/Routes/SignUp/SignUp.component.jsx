import { singUPWithGooglePopUp, getUserDocumentFromAuth } from "../../utils/DB/FireStore";

function SignUp() {
  const logGoogleUser = async function () {
    const { user } = await singUPWithGooglePopUp();
    const userDocRef = await getUserDocumentFromAuth(user);
  }

  return (
    <section>
      <h1>This is Sign Up page</h1>
      <button onClick={logGoogleUser}>Sign up with goolge</button>
    </section>
  )
}

export default SignUp;