import { Post } from "react-axios";
import User from "./User";
import renderResponse from "../renderResponse";
import FormField from "./FormField";
import { useState } from "react";

export default function PostUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [finished, setFinished] = useState(false);

  const formContents = (
    <div>
      <FormField
        id="FirstName"
        name="Firstname"
        checkConstraints={(val) => {
          setFirstName(val);
          return true;
        }}
      />
      <FormField
        id="LastName"
        name="Lastname"
        checkConstraints={(val) => {
          setLastName(val);
          return true;
        }}
      />
      <FormField
        id="Email"
        name="Email"
        checkConstraints={(val) => {
          setEmail(val);
          return true;
        }}
      />
    </div>
  );

  const postResults = (
    <Post
      url="https://reqres.in/api/users"
      data={{
        first_name: firstName,
        last_name: lastName,
        email: email,
      }}
    >
      {renderResponse}
    </Post>
  );

  return (
    <div>
      <b>Create User</b>
      {finished ? postResults : formContents}
      <button onClick={() => setFinished(!finished)}>
        {finished ? "Create another user" : "Send!"}
      </button>
    </div>
  );
}
