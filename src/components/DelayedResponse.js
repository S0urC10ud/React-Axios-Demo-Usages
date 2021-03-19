import { Get } from "react-axios";
import renderResponse from "../renderResponse";

export default function GetUser() {
  return (
    <div>
      <b>3s Delayed User-Request</b>
      <Get url="https://reqres.in/api/users/2?delay=3">{renderResponse}</Get>
    </div>
  );
}