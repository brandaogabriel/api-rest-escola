const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Luiz',
          email: 'luiz1@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Carolzinha',
          email: 'carolzinha@gmail.com',
          password_hash: await bcryptjs.hash('789524', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Aninha',
          email: 'aninha@gmail.com',
          password_hash: await bcryptjs.hash('16565848', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {},
    );
  },

  down: async () => {},
};
