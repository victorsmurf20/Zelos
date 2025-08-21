import express from 'express';
import { obterChamadoPorId, excluirChamado, criarChamado, listarChamado, atualizarChamado } from '../../models/chamado/Chamado.js';
import authMiddleware from '../../middlewares/authMiddleware.js';

const router = express.Router();


router.get("/chamado", authMiddleware, async (req, res) => {
  try {
    const chamado = await listarChamado();
    res.json(chamado);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar o chamado" });
  }
});


// GET /chamado/:id
router.get('/chamado/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
      return res.status(400).json({ erro: 'ID inválido. Deve ser um número positivo.' });
    }
    const chamado = await obterChamadoPorId(id);
    if (!chamado) {
      return res.status(404).json({ erro: 'Chamado não encontrado' });
    }
    res.json(chamado);
  } catch (error) {
    console.error('Erro na rota GET /chamado/:id:', error);
    res.status(500).json({ erro: error.message || 'Erro interno no servidor' });
  }
});

// DELETE
router.delete('/chamado/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (id <= 0) {
      return res.status(400).json({ erro: 'ID inválido. Deve ser um número positivo.' });
    }
    const result = await excluirChamado(id);
    if (result === 0) {
      return res.status(404).json({ erro: 'Chamado não encontrado' });
    }
    res.status(200).json({ message: 'Chamado excluído com sucesso', id });
  } catch (error) {
    console.error('Erro na rota DELETE /chamado/:id:', error);
    res.status(500).json({ erro: error.message || 'Erro interno no servidor' });
  }
});



// POST
router.post('/chamado', async (req, res) => {
  try {
    const chamadoData = req.body;
    if (!chamadoData || Object.keys(chamadoData).length === 0) {
      return res.status(400).json({ erro: 'Dados do chamado são obrigatórios.' });
    }
    const novoChamado = await criarChamado(chamadoData);
    res.status(201).json(novoChamado);

  } catch (error) {
    console.error('Erro na rota POST /chamado:', error);
    res.status(400).json({ erro: error.message || 'Erro ao criar o chamado' });
  }
})

//PUT
router.put('/chamado/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
      return res.status(400).json({ erro: 'ID inválido. Deve ser um número positivo.' });
    }

    const chamadoData = req.body;
    if (!chamadoData || Object.keys(chamadoData).length === 0) {
      return res.status(400).json({ erro: 'Dados para atualização são obrigatórios.' });
    }
    const affectedRows = await atualizarChamado(id, chamadoData);
    if (affectedRows === 0) {
      return res.status(404).json({ erro: 'Chamado não encontrado' });
    }
    res.status(200).json({ message: 'Chamado atualizado com sucesso!' });

  } catch (error) {
    console.error('Erro na rota PUT /chamado/:id:', error);
    res.status(500).json({ erro: error.message || 'Erro ao atualizar o chamado' });
  }
});
export default router;







