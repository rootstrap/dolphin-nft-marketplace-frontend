export const ErrorReqHandler = ({ status }: Status) => {
  if (status === 401) {
    window.localStorage.clear();
    window.location.reload();
    window.alert(errorMessages.expiredSession);
  }
};

const errorMessages = {
  expiredSession: 'Expired Session',
};

interface Status {
  status: number | 'FETCH_ERROR' | 'PARSING_ERROR' | 'CUSTOM_ERROR';
}
