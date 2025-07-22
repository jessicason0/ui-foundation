import "./App.css";
import "./App2.css";
import DarkMode from "./components/DarkMode";
import EnableButton from "./components/EnableButton";
import Login from "./components/Login";
import Modal from "./components/Modal";
import Practice from "./components/Practice";
import RegisterControlled from "./components/RegisterControlled";
import RegisterUncontrolled from "./components/RegisterUncontrolled";
import SelectInput from "./components/SelectInput";
import Slider from "./components/Slider";
import ZulaCard from "./components/ZulaCard";
import Parent from "./global/Parent";

function App() {
  return (
    <main>
      {/* App.css starts here */}

      <Parent heading={"Practice"}>
        <Practice />
      </Parent>
      <Parent heading={"Enable Button"}>
        <EnableButton />
        {/* above is the children (check Parent component) */}
      </Parent>
      <Parent heading={"Modal"}>
        <Modal />
      </Parent>
      <Parent heading={"Register Controlled"}>
        <RegisterControlled />
      </Parent>
      <Parent heading={"Register Uncontrolled"}>
        <RegisterUncontrolled />
      </Parent>
      <Parent heading={"Login"}>
        <Login />
      </Parent>
      <Parent heading={"Select Input"}>
        <SelectInput />
      </Parent>

      {/* App2.css starts here */}

      <Parent heading={"Dark Mode"}>
        <DarkMode />
      </Parent>
      <Parent heading={"Slider"}>
        <Slider />
      </Parent>
      <Parent heading={"Zula Card"}>
        <ZulaCard />
      </Parent>

      <div style={{ height: "100vh" }}></div>
    </main>
  );
}

export default App;
