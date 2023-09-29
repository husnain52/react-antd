import "./styles/App.css";
import Routes from "./routes/Routes";
import { store } from "./redux-toolkit/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
