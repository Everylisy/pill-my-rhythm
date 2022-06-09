import { Router, Request, Response, NextFunction } from "express";
import { check } from "express-validator";
import { UserService } from "../services/userService";
import { validatorErrorChecker } from "../middlewares/validator";
import { loginRequired } from "../middlewares/loginRequired";
import { IUserInput } from "../interfaces/userInput";

const UserRouter = Router();

UserRouter.post(
  "/register",
  [
    check("user_name").exists(),
    check("email").exists().isEmail(),
    check("password").exists().isLength({ min: 8, max: 12 }),
    validatorErrorChecker,
  ],

  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user_name, email, password, gender, age_range, job }: IUserInput = req.body;
      const newUser = await UserService.addUser({ user_name, email, password, gender, age_range, job });

      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  },
);

UserRouter.post("/login", async (req: Request, res: Response, next: NextFunction) => {
  try {
    // req (request) 에서 데이터 가져오기
    const { email, password } = req.body;

    // 위 데이터를 이용하여 유저 db에서 유저 찾기
    const user = await UserService.getUser(email, password);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

UserRouter.delete("/withdrawal", loginRequired, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const pk_user_id = req.currentUserId;
    const deletedUser = await UserService.delete(pk_user_id);

    res.status(201).json(deletedUser);
  } catch (error) {
    next(error);
  }
});

export { UserRouter };
