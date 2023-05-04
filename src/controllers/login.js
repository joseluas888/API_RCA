import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { getConnection, sql, queries } from "../database";
import { serialize } from 'cookie';


// Controlador de inicio de sesión
export async function login(req, res) {
    const { username, password } = req.body;
    try {
      const pool = await getConnection();
        const result = await pool
        .request()
        .input("username", username)
        .input("password", password)
        .query(queries.GetCredencialesAuth);
  
      if (result.recordset.length === 0) {
        return res.status(401).json({
          error: 1,
          message: "No Existe el Usuario.",
        });
      }
      res.json(result.recordset);

    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: 1,
        message: "An error occurred while processing your request.",
      });
    }
  }