import { GetStaticProps } from 'next';
import Link from 'next/link';

import { sampleUserData } from '../../src/utils/sample-data';
import List from '../../src/components/List';

type Props = {
  items: { id: number; name: string }[];
};

const WithStaticProps = ({ items }: Props) => (
  <>
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: { id: number; name: string }[] = sampleUserData;
  return { props: { items } };
};

export default WithStaticProps;
