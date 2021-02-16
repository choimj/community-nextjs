import React from 'react';
import { useRouter } from 'next/router';
import { ManagerWrite } from '../../../../src/components';

const ManagerWritePage = (): React.ReactElement => {
  const router = useRouter();
  const { type } = router.query;

  return <>{type && <ManagerWrite type={type} />}</>;
};

export default ManagerWritePage;
