
import "~/styles/index.scss";
import Routers from "./routes/Router";
import {
    BrowserRouter as Router,
} from "react-router-dom";

function App() {

    return (
        <>
            <Router>
                <Routers />
            </Router>
        </>
    );
}

export default App;
