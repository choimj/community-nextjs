import { makeVar } from '@apollo/client';

export const pageInfoVar = makeVar({ offset: 0, limit: 15 });
