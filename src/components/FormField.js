import { useState, useEffect } from "react";

export default function FormField({
  id,
  name,
  type = "text",
  defaultValue,
  checkConstraints = (formVal) => true,
}) {
  const [formValue, setFormValue] = useState(defaultValue);
  const [formStyle, setFormStyle] = useState("IncorrectFormStyle");

  const handleInputChange = (event) => {
    switch (event.target.type) {
      case "checkbox":
        setFormValue(event.target.checked);
        break;
      default:
        setFormValue(event.target.value);
    }
  };

  useEffect(() => {
    checkConstraints(formValue)
      ? setFormStyle("CorrectFormStyle")
      : setFormStyle("IncorrectFormStyle");
  }, [formValue]);

  return (
    <table className={formStyle}>
      <td>
        <label for={id}>{name}</label>
      </td>
      <td>
        <input
          type={type}
          id={id}
          value={formValue}
          onChange={(e) => handleInputChange(e)}
        />
      </td>
    </table>
  );
}