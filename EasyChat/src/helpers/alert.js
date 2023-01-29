import {ALERT_TYPE, Dialog, Toast} from 'react-native-alert-notification';

const _sendToast = (title, textBody, type) => Toast.show({type, title, textBody});
const _sendDialog = (title, textBody, type) => Dialog.show({type,title,textBody,button: 'close'});

export const successToast = ({title, textBody}) => _sendToast(title, textBody, ALERT_TYPE.SUCCESS);
export const dangerToast = ({title, textBody}) => _sendToast(title, textBody, ALERT_TYPE.DANGER);
export const warningToast = ({title, textBody}) => _sendToast(title, textBody, ALERT_TYPE.WARNING);

export const successDialog = ({title, textBody}) => _sendDialog(title, textBody, ALERT_TYPE.SUCCESS);
export const dangerDialog = ({title, textBody}) => _sendDialog(title, textBody, ALERT_TYPE.DANGER);
export const warningDialog = ({title, textBody}) => _sendDialog(title, textBody, ALERT_TYPE.WARNING);