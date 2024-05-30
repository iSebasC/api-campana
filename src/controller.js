const { listarMensajesActivos, programarCampana } = require('./service');

const consultarMensajes = async (event) => {
  const { mes, idCliente } = JSON.parse(event.body);
  try {
    const mensajes = await listarMensajesActivos(mes, idCliente);
    return {
      statusCode: 200,
      body: JSON.stringify(mensajes)
    };
  } catch (error) {
    console.error("Error en consultarMensajes:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', message: error.message })
    };
  }
};


const crearCampana = async (event) => {
  const { nombreCampana, idUsuario, fechaHoraProgramacion, estado } = JSON.parse(event.body);
  try {
    const result = await programarCampana(nombreCampana, idUsuario, fechaHoraProgramacion, estado);
    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'Campaña creada', id: result.insertId })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};

module.exports = {
  consultarMensajes,
  crearCampana,
};