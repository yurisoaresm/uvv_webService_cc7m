import { Request, Response } from 'express';

import logger from '../lib/logger';
import { AstrologyService } from '../services/astrologyService';
import { UserService } from '../services/usersService';

export class UserController {
  static createUser(req: Request, res: Response) {
    const { nickname, zodiacSign, plan } = req.body;

    logger.info(
      `Criando usuário com apelido [${nickname}] e signo [${zodiacSign}] com plano [${plan}]`,
    );

    const alreadyExists = UserService.getUserByNickname(nickname);

    if (alreadyExists) {
      logger.error(`Usuário com apelido [${nickname}] já existe`);
      res.status(400).send('Usuário já existe');
      return;
    }

    const newUser = UserService.createUser(nickname, zodiacSign, plan as 'basic' | 'premium');

    logger.info(`Usuário [${nickname}] criado com sucesso!`);
    res.status(201).json({ message: 'Usuário criado com sucesso!', user: newUser });
  }

  static async getUsers(_: Request, res: Response) {
    logger.info('Buscando todos os usuários');

    const users = UserService.getUsers();

    if (users.length === 0) {
      logger.error('Nenhum usuário encontrado');
      res.status(404).send('Nenhum usuário encontrado');
      return;
    }

    logger.info(`[${users.length}] usuários encontrados`);
    res.status(200).json(users);
  }

  static async getUserByNickname(req: Request, res: Response) {
    const { nickname } = req.params;

    logger.info(`Buscando usuário com apelido [${nickname}]`);

    const user = UserService.getUserByNickname(nickname);

    if (!user) {
      logger.error(`Usuário com apelido [${nickname}] não encontrado`);
      res.status(404).send('Usuário não encontrado');
      return;
    }

    logger.info(`Usuário com apelido [${nickname}] encontrado`);
    res.status(200).json(user);
  }

  static async getHoroscope(req: Request, res: Response) {
    const { nickname } = req.params;
    try {
      logger.info(`Buscando horóscopo para o usuário com apelido [${nickname}]`);
      const user = UserService.getUserByNickname(nickname);

      if (!user) {
        logger.error(`Usuário com apelido [${nickname}] não encontrado`);
        res.status(404).send('Usuário não encontrado');
        return;
      }

      const horoscope = AstrologyService.getHoroscope(user);

      logger.info(`Horóscopo para o usuário com apelido [${nickname}] encontrado`);
      res.status(200).json(horoscope);
    } catch (exception) {
      logger.error(`Erro ao buscar horóscopo para o usuário com apelido [${nickname}]`);
      const error = exception as Error;
      res.status(400).send(error.message);
    }
  }
}
