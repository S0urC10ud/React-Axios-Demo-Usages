import { Get } from "react-axios";
import renderResponse from "../renderResponse";

export default function GetUser() {
  return (
    <div>
      <b>User-Request</b>
      <Get url="https://reqres.in/api/users/2">{renderResponse}</Get>
    </div>
  );
}
