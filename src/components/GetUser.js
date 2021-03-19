import {
  AxiosProvider,
  Request,
  Get,
  Delete,
  Head,
  Post,
  Put,
  Patch,
  withAxios,
} from "react-axios";
import User from "./User";
export default function GetUser() {
  return (
    <div>
      <b>Userabfrage</b>
      <Get url="https://reqres.in/api/users/2">
        {(error, response, isLoading, makeRequest, axios) => {
          if (error) {
            return (
              <div>
                Something bad happened: {error.message}{" "}
                <button
                  onClick={() => makeRequest({ params: { reload: true } })}
                >
                  Retry
                </button>
              </div>
            );
          } else if (isLoading) {
            return <div>Loading...</div>;
          } else if (response !== null) {
            return (
              <div>
                <User
                  key={response.data.data.id}
                  id={response.data.data.id}
                  email={response.data.data.email}
                  first_name={response.data.data.first_name}
                  last_name={response.data.data.last_name}
                />
                <button
                  onClick={() => makeRequest({ params: { refresh: true } })}
                >
                  Refresh
                </button>
              </div>
            );
          }
          return <div>Default message before request is made.</div>;
        }}
      </Get>
    </div>
  );
}
