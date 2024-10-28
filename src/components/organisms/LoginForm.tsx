import React, { useState } from 'react';
import FormField from '../molecules/FormFeild';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <form>
      <FormField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onSubmit={handleLogin}
      />
      <FormField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onSubmit={handleLogin}
      />
    </form>
  );
};

export default LoginForm;
