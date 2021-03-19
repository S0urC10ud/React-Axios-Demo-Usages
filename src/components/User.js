export default function User({id, email, first_name, last_name}) {
  return (
    <div>
      <div>User ID: {id}</div>
      <div>E-Mail: {email}</div>
      <div>
        Name: {first_name} {last_name}
      </div>
    </div>
  );
}
