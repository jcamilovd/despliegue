const db = require("../db/mysql");
const bcrypt = require("bcryptjs");
const transporter = require("../config/mailer");

let register = (req, res) => {
  let hashPass = bcrypt.hashSync(req.body.password, 8);
  req.body.password = hashPass;

  db.registerUser(req.body)
    .then(async (result) => {
      try {
        // send mail with defined transport object
        await transporter.sendMail(
          {
            from: '"Reporte De Documentos" <reportdococument@gmail.com>', // sender address
            to: `${req.body.email}`, // list of receivers
            subject: "Registro exitoso ✔", // Subject line
            text: "Bienvenido a la pagina web de Documentos Perdidos", // plain text body
            html: `
            <table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">
            <tr>
                <td style="background-color: #ecf0f1; text-align: center; padding: 0">
                    <img width="30%"  style="display:block; margin: 10px auto"
                        src="https://i.ibb.co/Y7WkHFb/logo.png">
                </td>
            
            </tr>                  
            <tr>
                <td style="background-color: #ecf0f1">
                    <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                        <h2 style="color: #045b62; margin: 0 0 7px">¡Bienvenido!</h2>
                        <p style="margin: 2px; font-size: 15px">
                            Dispondrá de las siguientes funcionalidades adicionales:    
                        </p>
                        <ul style="font-size: 15px;  margin: 10px 0">
                            <li>Consultar todos los documentos perdidos reportados en el sitio web.</li>
                            <li>Consultar todos los documentos encontrados reportados en el sitio web.</li>
                            <li>Consultar los propios documentos reportados.</li>
                            <li>Editar los documentos reportador en el sitio web.</li>
                            <li>Deshabilitar los documentos reportados en el sitio web.</li> 
                        </ul>
                        <div style="width: 100%; text-align: center; margin-top: 30px;">
                            <a target="_blank" style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #118088"
                                href="http://localhost:4200/">Ir al sitio web</a>
                        </div>
                        <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Reporte De Documentos 2021</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="text-align: center;">
                    <a href="http://localhost:4200/activation?identificationNumber=${req.body.identificationNumber}">CLICK AQUI PARA ACTIVAR LA CUENTA</a>
                </td>
            </tr> 
          </table>
        `, // html body

           // attachments: [
           //   {
           //     path: "",
           //   },
           // ],
          },
          (error) => {
            if (error) {
              console.log(error);
            }
          }
        );
      } catch (error) {
        //emailStatus = error;
        return res.status(400).json({
          message: "Something went wrong with the email",
          error: error,
        });
      }
      return res.status(200).json({
        status: "Successful registration",
        reg: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  register,
};
