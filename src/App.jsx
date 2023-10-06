import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import MilkContainer from "./components/MilkContainer";
import UsersList from "./components/UsersList";

function App() {
  return (
    <>
      <Provider store={store}>
        <CakeContainer />
        <MilkContainer />
        <hr />
        <UsersList />
      </Provider>
    </>
  );
}

export default App;
