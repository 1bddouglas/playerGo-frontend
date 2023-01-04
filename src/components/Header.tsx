import "./Header.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";

const Header = () => {
  return (
    <header className="Header">
      <h1>Player Go</h1>
      <h2>Choose Your First Player</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={signOut}>Sign out</button>
    </header>
  );
};

export default Header;
