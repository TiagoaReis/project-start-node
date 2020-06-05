import Users from '../models/users'
import jwt from 'jsonwebtoken'

//index store update delete

const JWTSecret = "projetoassist24hsfreeonline"

export default {
    async index(req, res) {
        const listUsers = await Users.find()
        return res.json(listUsers)
    },
    async store(req, res) {
        const { email, password} = req.body
        const existUser = await Users.findOne({email})

        if (!existUser){
            const inUser = await Users.create({
                email, password
            })
            jwt.sign({email: Users.email},JWTSecret,{expiresIn:'48h'},(err, token) => {
                if(err){
                    res.status(400);
                    res.json({err:"Falha interna"});
                }else{
                    res.status(200);
                    res.json(
                        {
                            token: token,
                            return: 'true',
                            response: 'Email cadastrado com sucesso!'
                        }
                    );

                }
            })
            // res.status(200)
            // res.json(
            //     {
            //         return: 'true',
            //         response: 'Email cadastrado com sucesso!'
            //     }
            // )
        }else {
            res.status(400)
            res.json(
                {
                    return: 'false',
                    response: 'Email já esta sendo utilizado!'

                }
            )
        }
    }



}
