import User, { IUserAttributes } from '../models/User';

export class UserRepository {
  async create(item: IUserAttributes): Promise<IUserAttributes | undefined > {
    const user = await User.create(item);
    return user.toJSON() as IUserAttributes;
  }

  async findByUsername(username: string): Promise<IUserAttributes | null> {
    const user = await User.findOne({ where: { username } });
    return user ? (user.toJSON() as IUserAttributes) : null;
  }

  async findById(id: number): Promise<IUserAttributes | null> {
    const user = await User.findByPk(id);
    return user ? (user.toJSON() as IUserAttributes) : null;
  }
}
