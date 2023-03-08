import React from 'react';

const ContactMe = () => {
  return (
    <div>
      <form action=''>
        <label htmlFor="name">Full Name</label>
        <input type="text" id='name' required />
        
        <label htmlFor="email">Email</label>
        <input type="text" id='email' required />

        <label htmlFor="company">Company</label>
        <input type="text" id='company'/>
        
        <label htmlFor="phone">Phone</label>
        <input type="text" id='phone'/>
        
        <label htmlFor="message">Message</label>
        <input type="text" id='message'/>

        <button type='submit' onClick="location.href='mailto:jonnicwolf@gmail.com';">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactMe;