import { User } from '../models';

class UserController {

    static async signup(req, res, next) {
        try {
            const { username, email, password, institute, contact } = req.body;
            User.create({ username, email, password, institute, contact }).then((result) => {
                return res.status(200).send({ status: 200, message: 'User Created', result })
            }).catch((err) => {
                return res.status(400).send({ status: 400, message: 'User Not Created', err })
            });
        } catch (error) {
            return next(error);
        }
    }
}


export default UserController;