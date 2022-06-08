const { server } = require("../index");
const { api, createItem, getToken, deleteItem } = require("./helper");

beforeEach(async () => {

});

describe('Diferentes funciones de un administrador', () => {

    test("Registrar un administrador", async () => {
        const newAdm = {
            identificationNumber: "1094962010",
            fullName: "Oscar cardona",
            email: "duquei999@hotmail.com",
            password: "camilo12345",
            cityCode: "63001",
        };
        await api
            .post("/registerUser/adm")
            .send(newAdm)
            .expect(200)
            .expect("Content-Type", /application\/json/);
    });

    test("actualizar un administrador", async () => {
        const newAdm = {
            identificationNumber: "1094962010",
            fullName: "Juan Camilo",
            email: "duquei999@hotmail.com",
            password: "camilo12345",
            cityCode: "63001",
        };

        const token = await getToken();
        await api
            .put("/updateData/adm")
            .send(newAdm)
            .set({ Authorization: `Bearer ${token}` })
            .expect(200)
            .expect("Content-Type", /application\/json/);
    });
    test("Consultar  admins", async () => {

        const token = await getToken();
        await api
          .get("/consultAdmins")
          .set({ Authorization: `Bearer ${token}` })
          .expect(200)
          .expect("Content-Type", /application\/json/);
      });

      test("Registrar una tienda", async () => {

 
        const newAdm = {
            nit: "1094962010",
            name: "Panaderia",
            email: "duquei999@hotmail.com",
            state: 1,
            password:"camilo12345",
            cityCode: "63001",
        };
        const token = await getToken();
        
        await api
            .post("/registerShop/shop")
            .send(newAdm)
            .set({ Authorization: `Bearer ${token}` })
            .expect(200)
            .expect("Content-Type", /application\/json/);
      });
      
      test("actualizar una tienda", async () => {
      
       
        const newAdm = {
            nit: "1094962010",
            name: "FUTSALA",
            email: "duquei999@hotmail.com",
            state: 1,
            password:"camilo12345",
            cityCode: "63001",
        };
        const token = await getToken();
        
        await api
            .put("/updateShop/shop")
            .send(newAdm)
            .set({ Authorization: `Bearer ${token}` })
            .expect(200)
            .expect("Content-Type", /application\/json/);
      });
});

