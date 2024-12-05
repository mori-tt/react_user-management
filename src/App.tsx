import "./App.css";
import { Provider } from "./components/ui/provider";
import { Router } from "./router/Router";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Provider>
        <Router />
        <Toaster />
      </Provider>
    </>
  );
}

export default App;
