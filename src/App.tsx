import "./App.css";
import { Provider } from "./components/ui/provider";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <Provider>
        <Router />
      </Provider>
    </>
  );
}

export default App;
