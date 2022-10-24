import { useState } from "react";

import Form from "react-bootstrap/Form";

function Tim() {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);

    console.log("value is:", event.target.value);
  };

  return (
    <>
      <div>
        <Form.Select
          style={{
            display: "inline-block",
            width: "10em",
          }}
          aria-label="Default select example"
          onChange={handleChange}
        >
          <option  value="0">Antal rum</option>
          <option value="1">1 rum</option>
          <option value="2">2 rum</option>
 
        </Form.Select>

        <h2>Message: {message}</h2>
      </div>
    </>
  );
}

export default Tim;
