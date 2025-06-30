console.log('✅ Mocha config loaded');

export default {
  spec: 'test/**/*.ts',
  extension: ['ts'],
  require: 'ts-node/register',
};
