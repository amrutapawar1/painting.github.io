import React, { useLayoutEffect, useState } from 'react';
import { Alert, Stack, AlertColor, Snackbar } from '@mui/material';
import styles from './Alerts.module.css';
import CloseIcon from '@mui/icons-material/Close';

type AlertProps = {
  message?: string;
  url?: string;
  type?: AlertColor;
  closeOnTimeout?: boolean;
};

export const alertsData = {
  add: (_config: AlertProps) => { },
};

export const showSuccessMessage = (message: string, closeOnTimeout?: boolean, url?: string): void => {
  console.log("message", message)
  alertsData.add({
    message,
    type: 'success',
    closeOnTimeout,
    url,
  });
};

export const showErrorMessage = (message: string, closeOnTimeout?: boolean, url?: string): void => {
  alertsData.add({
    message,
    type: 'error',
    closeOnTimeout,
    url,
  });
};

export const showWarnMessage = (message: string, closeOnTimeout?: boolean, url?: string): void => {
  alertsData.add({
    message,
    type: 'warning',
    closeOnTimeout,
    url,
  });
};

export const showInfoMessage = (message: string, closeOnTimeout?: boolean, url?: string): void => {
  alertsData.add({
    message,
    type: 'info',
    closeOnTimeout,
    url,
  });
};

const Alerts = () => {

  const [alerts, setAlerts] = useState<AlertProps[]>([]);
  useLayoutEffect(() => {
    alertsData.add = (config: AlertProps) => {
      setAlerts(prevState => {
        return prevState.filter(alert => alert.message === config.message).length
          ? [...prevState]
          : [...prevState, config];
      });
      if (config.closeOnTimeout ?? true)
        setTimeout(() => {
          closeAlert(config.message);
        }, 5000000);
    };
  }, []);

  const closeAlert = (text: React.ReactNode) => {
    setAlerts(prevState => {
      if (prevState.length > 1) {
        return [...prevState.filter(alert => alert.message !== text)];
      }
      return [];
    });
  };

  return (
    <div>
      {alerts.map(alert => (
        <Stack key={alert.message} spacing={2} sx={{ width: '100%', alignItems: "center" }}>
          <Snackbar
            open={true}
            // autoHideDuration={90000}
            onClose={() => closeAlert(alert.message)} >
            <Alert severity={alert.type} className={styles.alert}>
              <span className={styles.alert_message}>
                {alert.message}
                <CloseIcon className={styles.alert_icon} onClick={() => closeAlert(alert.message)} />
              </span>
            </Alert>
          </Snackbar>
        </Stack>
      ))}
    </div >
  )
};

export default Alerts;