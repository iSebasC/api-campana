const pool = require('../config/db/db');

const listarMensajesActivos = async (mes, idCliente) => {
  const query = `
    SELECT COUNT(m.idMensaje) AS count, m.estadoEnvio
    FROM mensaje m
    JOIN campania c ON m.idCampania = c.idCampania
    WHERE MONTH(c.fechaHoraProgramacion) = ? AND (? IS NOT NULL AND c.idUsuario = ?)
    GROUP BY m.estadoEnvio;
  `;
  const params = [mes, idCliente, idCliente].map(param => param === undefined ? null : param);
  const [results] = await pool.execute(query, params);
  return results;
};



const programarCampana = async (nombreCampana, idUsuario, fechaHoraProgramacion, estado) => {
  const query = `
    INSERT INTO campania (nombre, idUsuario, fechaHoraProgramacion, estado)
    VALUES (?, ?, ?, ?);
  `;
  const [result] = await pool.execute(query, [nombreCampana, idUsuario, fechaHoraProgramacion, estado]);
  return result;
};

module.exports = {
  listarMensajesActivos,
  programarCampana
};
