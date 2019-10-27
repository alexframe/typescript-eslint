import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/typescript/basics/function-with-type-parameters-with-constraint.src.ts',
  ),
  {
    useJSXTextNode: false,
  },
);