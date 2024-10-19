import toast from "react-hot-toast";

export const getLocalStorageItem = (key) => localStorage.getItem(key);
export const setLocalStorageItem = (key, value) =>
  localStorage.setItem(key, value);
export const removeLocalStorageItem = (key) => localStorage.removeItem(key);

export const notifySuccess = (message) => {
  toast.success(message, {
    duration: 2500,
    position: "top-center",
  });
};
export const notifyError = (message) => {
  toast.error(message, {
    duration: 2500,
    position: "top-center",
  });
};
export const notifyErrorWithButton = (message, buttonText, passedFunction) => {
  const toastId = toast.error(
    <div className="notifyErrorWithButton">
      <span>{message}</span>
      <button
        onClick={() => {
          passedFunction();
          toast.dismiss(toastId);
        }}
        style={{
          marginLeft: "10px",
          padding: "0.5em 1em",
          background: "#f44336",
          color: "#fff",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        {buttonText}
      </button>
    </div>,
    {
      duration: 2500,
      position: "top-center",
      closeOnClick: false,
    }
  );
};

export const notifyPromise = (promise, messages) => {
  return toast.promise(
    promise,
    {
      loading: messages.loading || "Loading...",
      success: messages.success || "Action completed successfully!",
      error: messages.error || "Something went wrong!",
    },
    {
      duration: 2500,
      position: "top-center",
    }
  );
};
