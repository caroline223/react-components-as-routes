import React from 'react';

class SignUp extends React.Component {
    
    render() {
        return (
    <div>
      <form>
        <div>
          <input type="text" name="firstname" placeholder="First Name" />
          <label htmlFor="First Name">First Name:</label>
        </div>
        <div>
          <input type="text" name="lastname" placeholder="Last Name" />
          <label htmlFor="Last Name">Last Name:</label>
        </div>
        <div>
          <input type="number" name="age" placeholder="Age" />
          <label htmlFor="Age">Age</label>
        </div>
        <div>
          <input type="email" name="emailaddress" placeholder="Email Address" />
          <label htmlFor="Email Address">Email Address:</label>
        </div>
        <input  type="submit" value="Submit" />
      </form>
    </div>
        )
    }


}

export default SignUp;