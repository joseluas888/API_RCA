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
  const { id } = req.params;

  const pool = await getConnection();

  const result = await pool
    .request()
    .input("id", id)
    .query(queries.GetCoolerbyId);

  res.send(result.recordset[0]);
};

export const deleteCoolerById = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();

  const result = await pool
    .request()
    .input("id", id)
    .query(queries.DeleteCoolerbyId);

  res.status(204);
};

export const getTotalNumCoolers = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(queries.GetTotalNumCoolers);

  res.json(result.recordset[0][""]);
};

export const updateCoolerById = async (req, res) => {
  try {
    const { id } = req.params;
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

export const getTotalOrders = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(queries.GetTotalOrders);

  res.json(result.recordset);
};

export const getOrdersCancel = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(queries.GetOrdersCancel);

  res.json(result.recordset);
};

export const getOrdersAcepted = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(queries.GetOrdersAcepted);

  res.json(result.recordset);
};

// No desarrollados!

export const updateStatusSolicitudById = async (req, res) => {
  try {
    const { id, status } = req.params;

    const pool = await getConnection();

    const result = await pool
    .request()
    .input("id", id)
    .input("status", status)
    .query(queries.UpdateStatusSolicitudById);

    res.json(result);
    
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred on the server.");
    res.send(error.message);
  }
};
// yo te doy status al quiero llegar y el id de la solicitud a la que cambiar -> me cambia el status de la soli que quiero y me regresa "YA QUEDO"
