import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { getConnection, sql, queries } from "../database";
import { serialize } from 'cookie';


// Controlador de inicio de sesión
export async function login(req, res) {

    const { email, password } = req.body;

    try {
      const pool = await getConnection();
  
      // Busca el usuario en la base de datos por su correo electrónico
      const result = await pool
        .request()
        .input("email", email)
        .query(queries.GetOrdersAcepted);
  
      if (result.recordset.length === 0) {
        return res.status(401).json({
          error: 1,
          message: "No Existe el Usuario.",
        });
      }

      // Compara la contraseña enviada con la contraseña almacenada en la base de datos
      let match = await bcrypt.compare(password, result.recordset[0].password);

  
      if (!match) {
        return res.status(401).json({
          error: 1,
          message: "Invalid password.", //estaba haciendo debug, falta cambiar los message
        });
      }
  
      // Si las credenciales son válidas, genera un token JWT y envíalo en la respuesta
      const user = { id: result.recordset[0].IdEmpleado, email: result.recordset[0].email };
      const token = jwt.sign(user, "SECRET", { expiresIn: "1h" });
      const cookieSerialized = serialize('token', token, { httpOnly: true, secure: false, sameSite: 'strict' });
      //cambiar secure a TRUE una vez en PROD
      res.setHeader('Set-Cookie', cookieSerialized);
      res.json(result.recordset);

    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: 1,
        message: "An error occurred while processing your request.",
      });
    }
  }