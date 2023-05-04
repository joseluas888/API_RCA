import { getConnection, sql, queries } from "../database";

export const getCoolerById = async (req, res) => {
  

    const {id} = req.params
  
    const pool = await getConnection();
  
    const result = await pool.request().input("id",id).query(queries.xxxxx);
  
    res.send(result.recordset[0])
  }

export const getBestSellers = async (req, res) => {
  
    const pool = await getConnection();
    const result = await pool.request().query(queries.GetBestSeller);
    res.json(result.recordset);
};

export const getBestSelling = async (req, res) => {
  
  const pool = await getConnection();
  const result = await pool.request().query(queries.GetBestSelling);
  res.json(result.recordset[0]);
};
export const getSolicitudesMes = async (req, res) => {
  
  const pool = await getConnection();
  const result = await pool.request().query(queries.GetMonthlySolicitud);
  res.json(result.recordset);
};
export const getStatisticsCards = async (req, res) => {
  
  const pool = await getConnection();
  const result = await pool.request().query(queries.xxxx);
  res.json(result.recordset);
};

export const getNewPartners = async (req, res) => {
  
  const pool = await getConnection();
  const result = await pool.request().query(queries.GetNewPartners);
  res.json(result.recordset[0]);
};

export const getTotalPartners = async (req, res) => {
  
  const pool = await getConnection();
  const result = await pool.request().query(queries.GetTotalPartners);
  res.json(result.recordset[0]);
};

export const getTotalCoolersOnLocation = async (req, res) => {
  
  const pool = await getConnection();
  const result = await pool.request().query(queries.GetTotalOnLocation);
  res.json(result.recordset[0]);
};


