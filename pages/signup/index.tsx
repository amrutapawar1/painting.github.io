import React, { FC, ReactElement } from 'react';
import AuthenticatorProvider from '../../wrapper/AuthenticatorProvider';

const signup: FC = (): ReactElement => {

    return (
        <AuthenticatorProvider initialState="signUp" />
    )
}

export default signup;