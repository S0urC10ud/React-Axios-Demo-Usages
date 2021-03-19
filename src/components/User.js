export default function User({ id, email, first_name, last_name }) {
  return (
    <div>
      <div>User ID: {id}</div>
      {email && <div>E-Mail: {email}</div>}
      {first_name && last_name && (
        <div>
          Name: {first_name} {last_name}
        </div>
      )}
    </div>
  );
}
