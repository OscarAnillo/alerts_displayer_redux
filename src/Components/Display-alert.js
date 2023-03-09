import { useEffect } from "react";

export const DisplayAlert = ({
  displayAlertInfo,
  displayAlertSuccess,
  displayAlertError,
  dataInfo,
  dataSuccess,
  dataError,
}) => {
  useEffect(() => {
    let divInfo = document.querySelector(".div-info");
    let divSuccess = document.querySelector(".div-success");
    let divError = document.querySelector(".div-error");

    divInfo.classList.add("show-info-alert");
    divSuccess.classList.add("show-info-success");
    divError.classList.add("show-info-error");
  });

  return (
    <div>
      <div className="div-info">
        {displayAlertInfo && dataInfo === "info" && <h1>Info</h1>}
      </div>
      <div className="div-success">
        {displayAlertSuccess && dataSuccess === "success" && <h1>Success</h1>}
      </div>
      <div className="div-error">
        {displayAlertError && dataError === "error" && <h1>Error</h1>}
      </div>
    </div>
  );
};
