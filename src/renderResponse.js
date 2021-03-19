import User from "./components/User";

export default function renderResponse(
  error,
  response,
  isLoading,
  makeRequest,
  axios
) {
  if (error) {
    return (
      <div>
        Something bad happened: {error.message}{" "}
        <button onClick={() => makeRequest({ params: { reload: true } })}>
          Retry
        </button>
      </div>
    );
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else if (response !== null) {
    console.log("Response-Object:", response);
    return (
      <div>
        {response.data.id == null ? (
          <User
            key={response.data.data.id}
            id={response.data.data.id}
            email={response.data.data.email}
            first_name={response.data.data.first_name}
            last_name={response.data.data.last_name}
          />
        ) : (
          <User
            key={response.data.id}
            id={response.data.id}
            email={response.data.email}
            first_name={response.data.first_name}
            last_name={response.data.last_name}
          />
        )}
      </div>
    );
  }
  return <div>Default message before request is made.</div>;
}
