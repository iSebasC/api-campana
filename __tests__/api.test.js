// __tests__/api.test.js
const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
  test('Consultar mensajes devuelve un array', async () => {
    const response = await request(app)
      .post('/DESA/consultar-mensajes')
      .send({ mes: 5, idCliente: 1 })
      .expect(200)
      .expect('Content-Type', /json/);

    expect(Array.isArray(response.body)).toBe(true);
  }, 10000);

  test('Crear campaña devuelve un mensaje de éxito', async () => {
    const response = await request(app)
      .post('/DESA/crear-campana')
      .send({ nombreCampana: "Campaña Test", idUsuario: 1, fechaHoraProgramacion: "2024-12-25T00:00:00", estado: 1 })
      .expect(201)
      .expect('Content-Type', /json/);

    expect(response.body).toHaveProperty('message', 'Campaña creada');
    expect(response.body).toHaveProperty('id');
  }, 10000);
});
