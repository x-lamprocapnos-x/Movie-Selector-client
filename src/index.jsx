import { createRoot } from "react-dom/client";
import { MainView } from "./components/mainView/main-view";
//import statement to indicate that you need to bundle `./index.scss
import "./index.scss";
//main component (will eventually use all others)
const MyFlixApplication = () => {
    return(
        <div className="my-flix">
            <MainView/>
        </div>
    );
};
//finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);
//tells react to render your app in the root DOM element
root.render(<MyFlixApplication/>);

