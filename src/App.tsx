import "./App.css";
import Button from "./stories/Button/Button";

function App() {
  return (
    <div>
      <h1>Welcome to React StoryBook</h1>
      <Button
        button={{
          primary: true,
          size: "medium",
          text: "Login",
        }}
      />
    </div>
  );
}

export default App;
