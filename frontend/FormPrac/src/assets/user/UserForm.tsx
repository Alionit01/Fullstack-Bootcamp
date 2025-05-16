
import { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
 fullName: string;
 email: string;
 password: string;
};

function UserForm() {
 const [formData, setFormData] = useState<FormData>({
   fullName: '',
   email: '',
   password: '',
 });

const [submitted, setSubmitted] = useState<boolean>(false);

 // Handle input change
 const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
   const { name, value } = e.target;
   setFormData((prevData) => ({
     ...prevData,
     [name]: value,
   }));
 };

 // Handle form submission
 const handleSubmit = (e: FormEvent) => {
   e.preventDefault();

   if (!formData.fullName || !formData.email || !formData.password) {
     alert('Please fill all fields');
     return;
   }

   console.log('Form submitted:', formData);
   setSubmitted(true);
 };

return (
   <div style={{ padding: '20px' }}>
     <h2>User Registration Form</h2>

     {submitted ? (
       <p>🎉 Thank you for registering, {formData.fullName}!</p>
     ) : (
       <form onSubmit={handleSubmit}>
         <div>
           <label htmlFor="fullName">Full Name:</label><br />
           <input
             type="text"
             id="fullName"
             name="fullName"
             value={formData.fullName}
             onChange={handleChange}
             placeholder="John Doe"
           />
         </div>

         <div>
           <label htmlFor="email">Email:</label><br />
           <input
             type="email"
             id="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
             placeholder="john@example.com"
           />
         </div>

         <div>
           <label htmlFor="password">Password:</label><br />
           <input
             type="password"
             id="password"
             name="password"
             value={formData.password}
             onChange={handleChange}
             placeholder="********"
           />
         </div>

         <button type="submit">Register</button>
       </form>
     )}
   </div>
 );
}

export default UserForm;