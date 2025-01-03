import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'om691cq7', // project ID from sanity.config.ts
  dataset: 'production',
  apiVersion: '2023-01-01', 
  token: process.env.REACT_APP_SANITY_TOKEN, 
  useCdn: false, 
});
