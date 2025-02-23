import { UserRepository } from '../repositories/UserRepository';
import * as jwt from 'jsonwebtoken';
import { SignOptions } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { IUserAttributes } from '../models/User';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async register(username: string, password: string): Promise<IUserAttributes | undefined > {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await this.userRepository.create({ username, password: hashedPassword });
    return user;
  }

  async login(username: string, password: string): Promise<string | null> {
    const user = await this.userRepository.findByUsername(username);
    if (!user) return null;

    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) return null;

    // Ensure that the secret is defined.
    const secret: string = process.env.JWT_SECRET as string;
    // Default expiresIn value if not defined.
    const expiresIn: string | number = process.env.JWT_EXPIRES_IN || "1h";

    // We cast expiresIn to 'any' to satisfy the type signature.
    const options: SignOptions = { expiresIn: expiresIn as any };

    const token = jwt.sign(
      { id: user.id, username: user.username },
      secret,
      options
    );
    return token;
  }
}
