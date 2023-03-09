import { useState } from "react";

import { AlertComponent } from "./Components/Alert-component";
import { DisplayAlert } from "./Components/Display-alert";

import "./App.css";

function App() {
  const [displayAlertInfo, setDisplayAlertInfo] = useState(false);
  const [displayAlertSuccess, setDisplayAlertSuccess] = useState(false);
  const [displayAlertError, setDisplayAlertError] = useState(false);
  const [dataInfo, setDataInfo] = useState("");
  const [dataSuccess, setDataSuccess] = useState("");
  const [dataError, setDataError] = useState("");

  const clickHandlerInfoAlert = (e) => {
    setDisplayAlertInfo(!displayAlertInfo);
    setDataInfo(e.currentTarget.dataset.name);
  };

  const clickHandlerSucessAlert = (e) => {
    setDisplayAlertSuccess(!displayAlertSuccess);
    setDataSuccess(e.currentTarget.dataset.name);
  };

  const clickHandlerErrorAlert = (e) => {
    setDisplayAlertError(!displayAlertError);
    setDataError(e.currentTarget.dataset.name);
  };

  return (
    <div className="App">
      <AlertComponent
        clickHandlerInfoAlert={clickHandlerInfoAlert}
        clickHandlerSucessAlert={clickHandlerSucessAlert}
        clickHandlerErrorAlert={clickHandlerErrorAlert}
      />
      <DisplayAlert
        displayAlertInfo={displayAlertInfo}
        displayAlertSuccess={displayAlertSuccess}
        displayAlertError={displayAlertError}
        dataInfo={dataInfo}
        dataSuccess={dataSuccess}
        dataError={dataError}
      />
    </div>
  );
}

export default App;
