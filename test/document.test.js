const { server } = require("../index");
const { api, createItem, getToken, deleteItem } = require("./helper");

beforeEach(async () => {

});

describe('Diferentes funciones de documentos', () => {
  

    test("Registrar un documento perdido por usuario", async () => {

      
        const newAdm = {
          documentNumber: "1094962010",
            fullName: "Oscar cardona",
            email: "duquei999@hotmail.com",
            cityCode: "63001",
            description:"documento perdido",
            category: 0
        };

        const token = await getToken();
        await api
            .post("/addDocuments/document")
            .set({ Authorization: `Bearer ${token}` })
            .send(newAdm)
            .expect(200)
            .expect("Content-Type", /application\/json/);
    });

    test("actualizar un documento perdido ", async () => {
      const newAdm = {
        id:38,
        documentNumber: "1094962012",
        fullName: "JOSE TULUO",
        email: "duque@i999@hotmail.com",
        cityCode: "63001",
        description:"documento perdido",
        category: 0
      };
      const token = await getToken();
      
      await api
          .put("/updateDocument/document")
          .send(newAdm)
          .set({ Authorization: `Bearer ${token}` })
          .expect(200)
          .expect("Content-Type", /application\/json/);
    });
    test("Registrar un documento encontrado por usuario", async () => {

      
      const newAdm = {
        documentNumber: "1094962011",
          fullName: "Oscar cardona",
          email: "duquei999@hotmail.com",
          cityCode: "63001",
          description:"documento encontrado",
          category: 1
      };

      const token = await getToken();
      await api
          .post("/addDocuments/document")
          .set({ Authorization: `Bearer ${token}` })
          .send(newAdm)
          .expect(200)
          .expect("Content-Type", /application\/json/);
  });

  test("actualizar un documento encontrado ", async () => {
    const newAdm = {
      id:39,
      documentNumber: "1094962010",
      fullName: "Otoniel",
      email: "duquei999@hotmail.com",
      cityCode: "63001",
      description:"documento perdido",
      category: 1
    };
    const token = await getToken();
    
    await api
        .put("/updateDocument/document")
        .send(newAdm)
        .set({ Authorization: `Bearer ${token}` })
        .expect(200)
        .expect("Content-Type", /application\/json/);
  });

   test("actualizar un documento encontrado ", async () => {
    const newAdm = {
      id:39,
      documentNumber: "1094962010",
      fullName: "Otoniel",
      email: "duquei999@hotmail.com",
      cityCode: "63001",
      description:"documento perdido",
      category: 1
    };
    const token = await getToken();
    
    await api
        .put("/updateDocument/document")
        .send(newAdm)
        .set({ Authorization: `Bearer ${token}` })
        .expect(200)
        .expect("Content-Type", /application\/json/);
  });
  test("Registrar un documento encontrado por adm", async () => {

      
    const newAdm = {
      documentNumber: "1094962010",
        fullName: "Oscar cardona",
        email: "duquei999@hotmail.com",
        cityCode: "63001",
        description:"documento perdido",
        category: 1,
        userIdentificationNumber: "24603274"
    };

    const token = await getToken();
    await api
        .post("/addDocuments/document")
        .set({ Authorization: `Bearer ${token}` })
        .send(newAdm)
        .expect(200)
        .expect("Content-Type", /application\/json/);
});

test("Registrar un documento perdido por adm", async () => {

 
  const newAdm = {
      documentNumber: "1094962010",
      fullName: "Oscar cardona",
      email: "duquei999@hotmail.com",
      cityCode: "63001",
      description:"documento perdido",
      category: 0,
      userIdentificationNumber: "24603274"
  };
  const token = await getToken();
  
  await api
      .post("/addDocuments/document")
      .send(newAdm)
      .set({ Authorization: `Bearer ${token}` })
      .expect(200)
      .expect("Content-Type", /application\/json/);
});
test("Consultar  documentos", async () => {

  const token = await getToken();
  await api
    .get("/consultDocuments")
    .set({ Authorization: `Bearer ${token}` })
    .expect(200)
    .expect("Content-Type", /application\/json/);
});
test("Consultar  tiendas", async () => {

  const token = await getToken();
  await api
    .get("/consultShops")
    .set({ Authorization: `Bearer ${token}` })
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

});

