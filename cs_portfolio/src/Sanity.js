import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'om691cq7', // My project ID from sanity.config.ts
  dataset: 'production',      
  useCdn: true,              
});
