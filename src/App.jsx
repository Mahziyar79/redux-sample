import { Provider } from "react-redux";
// import CakeContainer from "./components/CakeContainer";
import storeReduxtoolkit from "./redux-toolkit/store";
// import storeRedux from "./redux/store";
// import MilkContainer from "./components/MilkContainer";
// import UsersList from "./components/UsersList";
import CakeContainerReduxToolkit from "./components/CakeContainerReduxToolkit";

function App() {
  return (
    <>
      <Provider store={storeReduxtoolkit}>
        {/* <Provider store={storeRedux}> */}
          {/* <h1>Redux</h1>
          <CakeContainer />
          <MilkContainer />
          <UsersList />
          <hr /> */}
          <h1>Redux Toolkit</h1>
          <CakeContainerReduxToolkit />
        {/* </Provider> */}
      </Provider>
    </>
  );
}

export default App;
