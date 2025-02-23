import { UserRepository } from '../repositories/UserRepository';
import logger from '../utils/logs/logger';
import * as jwt from 'jsonwebtoken';
import { SignOptions } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { IUserAttributes } from '../models/User';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async register(username: string, password: string): Promise<IUserAttributes | undefined> {
    try {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const user = await this.userRepository.create({ username, password: hashedPassword });
      return user;
    } catch (error: any) {
      logger.error(`User registration failed: ${error.message}`, { username, stack: error.stack });
      throw error; // Optionally rethrow or handle error
    }
  }

  async login(username: string, password: string): Promise<string | null> {
    try {
      const user = await this.userRepository.findByUsername(username);
      if (!user) {
        logger.error(`Login failed: User not found for username "${username}".`);
        return null;
      }

      const isValid = bcrypt.compareSync(password, user.password);
      if (!isValid) {
        logger.error(`Login failed: Invalid password for username "${username}".`);
        return null;
      }

      // Ensure that the secret is defined.
      const secret: string = process.env.JWT_SECRET as string;
      // Default expiresIn value if not defined.
      const expiresIn: string | number = process.env.JWT_EXPIRES_IN || "1h";

      // Cast expiresIn to any to satisfy type signature.
      const options: SignOptions = { expiresIn: expiresIn as any };

      const token = jwt.sign(
        { id: user.id, username: user.username },
        secret,
        options
      );
      return token;
    } catch (error: any) {
      logger.error(`Error during login for username "${username}": ${error.message}`, { stack: error.stack });
      return null;
    }
  }

}
