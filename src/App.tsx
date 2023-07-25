import rabbitChoices from "./components/rabbitChoiceApp";

function App(): JSX.Element {
  return (
    <>
      <div>
        <p>{rabbitChoices("🐰")}</p>
      </div>
    </>
  );
}

export default App;
