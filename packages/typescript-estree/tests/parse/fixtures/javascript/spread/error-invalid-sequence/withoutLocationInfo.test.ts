import path from 'path';
import { testWithoutLocation } from 'test-fixture';

testWithoutLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/javascript/spread/error-invalid-sequence.src.js',
  ),
  {
    useJSXTextNode: false,
  },
);