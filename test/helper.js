const supertest = require("supertest");
const { app } = require("../index");
const nJwt = require("njwt");
const config = require("../app/config/keys");

const api = supertest(app);

createItem = async (route, item) => {
  const token = await getToken();
  const response = await api.post(route).send(item).set("Authorization", `Bearer ${token}`);

  return response;
};

getToken = async () => {
  const jwt = nJwt.create({ 
    id: 0,
    email: "test@gmail.com",
    role: "admin"
   }, config.SIGNING_KEY);

   jwt.setExpiration(new Date().getTime() + 60 * 60 * 1000);
   const token = jwt.compact();

  return token;
};

deleteItem = async (route) => {
  const token = await getToken();
  const response = await api.delete(route).set("Authorization", `Bearer ${token}`);

  return response;
};

module.exports = { api, createItem, getToken, deleteItem };