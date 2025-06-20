import api from './api';

export const userService = {
  async listarFuncionarios() {
    try {
      const response = await api.get('/funcionarios');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao buscar funcionários');
    }
  },

  async criarFuncionario(dados) {
    try {
      const response = await api.post('/funcionarios', dados);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao criar funcionário');
    }
  },
};