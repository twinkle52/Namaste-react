import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("only error object", err);
  console.log("only error object with message", err.message);

  return (
    <div>
      <h1>Something went wrong</h1>
      <h2>
        {err.status}: {err.error.message}
      </h2>
    </div>
  );
};

export default Error;
