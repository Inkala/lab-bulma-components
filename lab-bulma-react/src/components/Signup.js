import React from 'react';

import Container from './Container';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

function Signup() {
  return (
    <>
      <Navbar />
      <Container>
        <form>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" placeholder="Enter your password" />
          <CoolButton isSuccess isRounded>Submit</CoolButton>
        </form>
      </Container>
    </>
  );
}

export default Signup;
