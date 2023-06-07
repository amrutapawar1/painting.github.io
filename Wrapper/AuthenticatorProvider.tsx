import React from 'react';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator, AuthenticatorProps } from '@aws-amplify/ui-react';
import formFields from '../FormFieldConfig/Auth/SignupFormField';
import Index from '../pages/index';

const AuthenticatorProvider = (props:AuthenticatorProps) => {

  return (
    <Authenticator signUpAttributes={['given_name', 'family_name', 'phone_number']} socialProviders={['google']} formFields={formFields} initialState={props.initialState}>
     <Index />
    </Authenticator>
  )
}

export default AuthenticatorProvider