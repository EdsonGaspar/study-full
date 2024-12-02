import Form from "./components/form";
import { List } from "./components/list";
import { NavBar } from "./components/navbar";
import { Seach } from "./components/search";
// import Test from "./components/text";
import "./styles/global.scss";

function App() {
  return (
    <main>
      <NavBar />
      {/* <Test /> */}
      <Seach />
      <List />
      <Form />
    </main>
  );
}

export default App;
