import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, message
}) => (
  <div>
    <h3>Name: 
      <span className='font-normal'>{name}</span>
    </h3>
    <h3>Email ID: 
      <span className='font-normal'>{email}</span>
    </h3>
    <h3>Message: <br/>
      <span className='font-normal'>{message}</span> 
    </h3>
  </div>
);