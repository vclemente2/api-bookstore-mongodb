import "dotenv/config.js";

export default {
  uri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}/Bookstore`
};
