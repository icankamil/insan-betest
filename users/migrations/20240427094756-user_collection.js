module.exports = {
  async up(db, client) {
    await db.createCollection("User");
  },

  async down(db, client) {
    try {
      await db.collection("User").drop();
    } catch (error) {
      console.log(error.message);
    }
  },
};
