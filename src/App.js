import { useState } from "react";

import { AlertComponent } from "./Components/Alert-component";
import { DisplayAlert } from "./Components/Display-alert";

import { useDispatch } from "react-redux";
import { setAlertMessage } from "./Redux/Features/alert-slice";

import "./App.css";

function App() {
  const [displayAlertInfo, setDisplayAlertInfo] = useState(false);
  const [displayAlertSuccess, setDisplayAlertSuccess] = useState(false);
  const [displayAlertError, setDisplayAlertError] = useState(false);
  const [dataInfo, setDataInfo] = useState("");
  const [dataSuccess, setDataSuccess] = useState("");
  const [dataError, setDataError] = useState("");

  const dispatch = useDispatch();

  const clickHandlerInfoAlert = (e) => {
    setDisplayAlertInfo(true);
    setDataInfo(e.currentTarget.dataset.name);
    dispatch(setAlertMessage("Info"));
    setTimeout(() => setDisplayAlertInfo(false), 3000);
  };

  const clickHandlerSucessAlert = (e) => {
    setDisplayAlertSuccess(true);
    setDataSuccess(e.currentTarget.dataset.name);
    dispatch(setAlertMessage("Success"));
    setTimeout(() => setDisplayAlertSuccess(false), 3000);
  };

  const clickHandlerErrorAlert = (e) => {
    setDisplayAlertError(true);
    setDataError(e.currentTarget.dataset.name);
    dispatch(setAlertMessage("Error"));
    setTimeout(() => setDisplayAlertError(false), 3000);
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
