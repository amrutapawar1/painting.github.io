import React, { FC, ReactElement } from 'react';
import AuthenticatorProvider from '../../Wrapper/AuthenticatorProvider';
import { Box } from '@mui/material';

const login: FC = (): ReactElement => {
    return (
        <Box className='mt-2 mb-2'>
            <AuthenticatorProvider initialState='signIn' />
        </Box>
    )
}

export default login;