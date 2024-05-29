
import "~/assets/styles/index.scss";
import Routers from "./routes/Router";
import { Scrollbars } from 'react-custom-scrollbars-2';
function App() {

  return (
    <>
      {/* <Scrollbars style={{width: '100%', height: "100vh" }}> */}
        <Routers />
      {/* </Scrollbars> */}
    </>
  );
}

export default App;
