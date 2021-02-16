import * as React from 'react';
import Head from 'next/head';

type ListDetailProps = {
  item: { id: number; name: string };
};

const ListDetail = ({ item: user }: ListDetailProps) => (
  <>
    <Head>
      <title>{user.name}</title>
    </Head>
    <div>
      <h1>Detail for {user.name}</h1>
      <p>ID: {user.id}</p>
    </div>
  </>
);

export default ListDetail;
