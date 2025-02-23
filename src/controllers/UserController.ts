import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { validationResult } from 'express-validator';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  register = async (req: Request, res: Response): Promise<void> => {
    // Validate and sanitize input
    const errors = validationResult(req);
    // console.log(req.body)
    // debugger;
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    try {
      const { username, password } = req.body;
      const user = await this.userService.register(username, password);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  login = async (req: Request, res: Response): Promise<void> => {
    // Validate and sanitize input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    try {
      const { username, password } = req.body;
      const token = await this.userService.login(username, password);
      if (!token) {
        res.status(401).json({ message: 'Invalid credentials' });
        return;
      }

      // Set token in an HTTP-only cookie (optional)
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      });

      res.status(200).json({ token });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
