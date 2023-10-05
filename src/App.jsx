import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import MilkContainer from "./components/MilkContainer";

function App() {
  return (
    <>
      <Provider store={store}>
        <CakeContainer />
        <MilkContainer />
      </Provider>
    </>
  );
}

export default App;
