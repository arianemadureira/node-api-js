// routes.js

const express = require('express');
const logic = require('./logic');

const router = express.Router();

/**
 * @swagger
 * /list:
 *   get:
 *     description: Retorna os dados.
 *     responses:
 *       200:
 *         description: Sucesso.
 */
router.get('/list', (req, res) => {
  const list = logic.getList();
  res.json({ data: list });
});

/**
 * @swagger
 * /add:
 *   post:
 *     description: Adiciona um item à lista.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *     responses:
 *       200:
 *         description: Sucesso.
 */
router.post('/add', (req, res) => {
  const item = req.body;
  logic.addItem(item);
  res.json({ message: 'Item adicionado com sucesso!' });
});

module.exports = router;
