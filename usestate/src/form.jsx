
import * as React from 'react'
 
function Form() {
    const [formData, setFormData] = React.useState({ name: "", email: "" });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    return (
      <div>
        <h2>Yhteystiedot</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
      </div>
    );
  }
 
export default Form;