import axios from 'axios';
import cuid from 'cuid';
import { config } from 'dotenv';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

import { User } from '../../models';
config();
export class AuthController {
  static async CreateUserWithGoogleProvider(
    req: Request,
    res: Response
  ) {
    try {
      const { access_token } = req.body;
      const { data } = await axios.get(
        'https://www.googleapis.com/oauth2/v2/userinfo',
        {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        }
      );
      console.log(data);
      const schema = z.object({
        id: z.string(),
        email: z.string(),
        verified_email: z.boolean(),
        name: z.string(),
        given_name: z.string(),
        family_name: z.string(),
        picture: z.string().url(),
        locale: z.string()
      });

      const {
        family_name,
        given_name,
        email,
        verified_email,
        id,
        locale,
        name,
        picture
      } = schema.parse(data);
      const userExists = await User.findOne({
        where: {
          googleId: id
        }
      });
      let user;
      if (!userExists) {
        user = await User.create({
          familyName: family_name,
          givenName: given_name,
          nickName: `@${given_name}${cuid()}`,
          googleId: id,
          picture: picture,
          email,
          verifiedEmail: verified_email
        });
      } else {
        user = userExists;
      }
      const token = await sign(
        {
          id: user?.id
        },
        process.env.JWT_SECRET as string,
        {
          expiresIn: 60 // 60 seconds
        }
      );
      console.log(user);
      res.json({ user, token });
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  }
}
