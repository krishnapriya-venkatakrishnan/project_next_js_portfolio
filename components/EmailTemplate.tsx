import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, message
}) => (
  <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md text-gray-800 font-sans">
    <h2 className="text-2xl font-semibold text-blue-600 mb-4">New Contact Form Submission</h2>

    <p className="mb-2">
      <span className="font-medium">Name:</span> {name}
    </p>
    <p className="mb-2">
      <span className="font-medium">Email:</span>{' '}
      <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
        {email}
      </a>
    </p>
    <p className="mb-1 font-medium">Message:</p>
    <div className="bg-gray-50 p-4 border-l-4 border-blue-400 whitespace-pre-wrap">
      {message}
    </div>

    <hr className="my-6" />
    <p className="text-xs text-gray-500">
      This message was sent from your portfolio website.
    </p>
  </div>

);