import React from 'react';

interface AuthTemplateProps {
  children: React.ReactNode;
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <div className="auth-container">
      <h1>Authentication</h1>
      <div>{children}</div>
    </div>
  );
};

export default AuthTemplate;
