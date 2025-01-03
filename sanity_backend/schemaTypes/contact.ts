export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule: any) =>
          Rule.required()
            .email()
            .error('Please enter a valid email address'),
      },
      {
        name: 'phone',
        title: 'Phone Number',
        type: 'string',
        validation: (Rule: any) =>
          Rule.min(10)
            .max(15)
            .error('Enter a valid phone number'),
      },
      {
        name: 'linkedin',
        title: 'LinkedIn',
        type: 'url',
      },
      {
        name: 'github',
        title: 'GitHub',
        type: 'url',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'text',
      },
    ],
  };
  