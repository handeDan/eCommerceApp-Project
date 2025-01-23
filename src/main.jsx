import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { worker } from "./mocks/browser.js";

async function API_RENDER() {
  return worker.start(); // Worker'ı başlatıyoruz
}
API_RENDER().then(() => {
  createRoot(document.getElementById("root")).render(
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
});
