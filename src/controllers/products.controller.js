import { getConnection, sql, queries } from "../database";

const requiredFields = [
  "ModeloCooler",
  "Marca",
  "Identificador",
  "NumPuertas",
  "SizeCliente",
  "TypeDoor",
  "PotencialVentaMensual",
  "CapacidadBottle",
  "LlenadoPuerta",
  "IngresoMensualCliente",
  "GananciaMensualCliente",
  "ConsumoEnergeticoMensual",
  "ConsumoEnergeticoDinero",
];
let variables = {
  IdCooler: sql.Float,
  ModeloCooler: sql.VarChar,
  Marca: sql.VarChar,
  Identificador: sql.VarChar,
  NumPuertas: sql.Float,
  SizeCliente: sql.VarChar,
  TypeDoor: sql.VarChar,
  PotencialVentaMensual: sql.VarChar,
  CapacidadBottle: sql.Float,
  LlenadoPuerta: sql.Float,
  ConsumoEnergeticoMensual: sql.VarChar,
  ConsumoEnergeticoDinero: sql.Float,
};

export const getProducts = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.GetAllCoolers);
  res.json(result.recordset);
};

export const createProduct = async (req, res) => {
  try {
    const fieldsProducts = req.body;
    if (requiredFields.every((field) => fieldsProducts[field] != null)) {
      const pool = await getConnection();

      let request = pool.request();

      for (let [name, type] of Object.entries(variables)) {
        request.input(name, type, fieldsProducts[name]);
      }

      await request.query(queries.CreateNewCooler);

      let response = {};
      for (let name in variables) {
        response[name] = fieldsProducts[name];
      }
      res.json(response);
    } else {
      res.status(400).json({ msg: "Bad Request. Please fill all the fields." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred on the server.");
  }
};

export const getCoolerById = async (req, res) => {
  const {id} = req.params

  const pool = await getConnection();

  const result = await pool.request().input("id",id).query(queries.GetCoolerbyId);

  res.send(result.recordset[0])
}

export const deleteCoolerById = async (req, res) => {
  const {id} = req.params

  const pool = await getConnection();

  const result = await pool.request().input("id",id).query(queries.DeleteCoolerbyId);

  res.status(204);
}

export const getTotalNumCoolers = async (req, res) => {

  const pool = await getConnection();

  const result = await pool.request().query(queries.GetTotalNumCoolers);

  res.json(result.recordset[0][""])
}

export const updateCoolerById = async (req, res) => {
  try {
    const {id} = req.params;
    const fieldsProducts = req.body;
    if (requiredFields.every((field) => fieldsProducts[field] != null)) {
      const pool = await getConnection();

      let request = pool.request();
      request.input("id", id);

      for (let [name, type] of Object.entries(variables)) {
        request.input(name, type, fieldsProducts[name]);
      }

      await request.query(queries.UpdateCoolerbyId);

      let response = {};
      for (let name in variables) {
        response[name] = fieldsProducts[name];
      }
      res.json(response);
    } else {
      res.status(400).json({ msg: "Bad Request. Please fill all the fields." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred on the server.");
    res.send(error.message);
  }
};
