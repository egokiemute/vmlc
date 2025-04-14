// components/Meta.js
import Head from 'next/head';

const Meta = ({ title, description, favicon }) => {
  return (
    <Head>
      <title>{title || 'Default Title'}</title>
      <meta name="description" content={description || 'Default description'} />
      <link rel="icon" href={favicon || '/favicon.ico'} />
    </Head>
  );
};

export default Meta;
