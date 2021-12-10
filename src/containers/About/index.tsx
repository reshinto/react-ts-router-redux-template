import useNavigationHook from "../../shared/hooks/useNavigationHook";
import Posts from "../../shared/components/Posts";

function About() {
  const { navigate } = useNavigationHook();

  return (
    <div>
      <h1>About</h1>
      <button onClick={navigate}>Go Back</button>
      <Posts />
    </div>
  );
}

export default About;
