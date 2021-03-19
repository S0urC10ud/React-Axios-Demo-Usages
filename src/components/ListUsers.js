import {
  Get
} from "react-axios";
import User from "./User";

export default function GetUser() {
  return (
    <div>
      <b>User-List-Request</b>
      <Get url="https://reqres.in/api/users">
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
                <div>
                  {response.data.data.map((user)=>
                    <User
                      key={user.id}
                      id={user.id}
                      email={user.email}
                      first_name={user.first_name}
                      last_name={user.last_name}
                    />
                  )}
                </div>
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
