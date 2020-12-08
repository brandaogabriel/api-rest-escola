import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Ana',
      sobrenome: 'Caroline',
      email: 'anacaroline@nunesmaciel',
      idade: 20,
      peso: 50,
      altura: 1.55,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
