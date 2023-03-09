export const AlertComponent = ({
  clickHandlerInfoAlert,
  clickHandlerSucessAlert,
  clickHandlerErrorAlert,
}) => {
  return (
    <div className="alert-div">
      <h1>Alert it!</h1>
      <button onClick={clickHandlerInfoAlert} className="info" data-name="info">
        Info
      </button>
      <button
        onClick={clickHandlerSucessAlert}
        className="success"
        data-name="success"
      >
        Success
      </button>
      <button
        onClick={clickHandlerErrorAlert}
        className="error"
        data-name="error"
      >
        Error
      </button>
    </div>
  );
};
