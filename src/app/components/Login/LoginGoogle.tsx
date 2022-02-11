import { useGoogleLoginMutation, useLoginStatusMutation } from 'app/services/user/UserService';
import { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { uuid } from 'uuidv4';

export const LoginGoogle = () => {
  const [loginStatus] = useLoginStatusMutation();
  const [googleLogin, { isSuccess }] = useGoogleLoginMutation();
  const clientId = '609589786870-8adupdv7qpnaiagudd9uikek8ina8872.apps.googleusercontent.com'; // PROD/DEV
  // const clientId = '569452643207-1otrloqm13905ppl0mkc7agvf0qt8hls.apps.googleusercontent.com';

  const onSuccess = (res: any) => {
    console.log('response google: ', res);
    googleLogin({
      deviceId: uuid(),
      googleIdToken: res.googleId,
    });
  };

  const onFailure = (res: any) => console.log('Login failed res: ', res);

  useEffect(() => {
    if (isSuccess) {
      loginStatus();
    }
  }, [isSuccess, loginStatus]);

  return (
    <div style={{ margin: '1rem 0', width: '100%' }}>
      <GoogleLogin
        clientId={clientId}
        buttonText="Continue with your Google account"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        style={{ width: '200px' }}
        isSignedIn={true}
      />
    </div>
  );
};
