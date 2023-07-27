import { db } from "../db.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

export const getProducts = (_, res) => {
  const q = "SELECT * FROM produtos";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addProducts = (req, res) => {
    const q =
      "INSERT INTO produtos (`name`, `description`, `price`, `category`, `shipment`, `image`) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.category,
      req.body.shipment,
      `${req.protocol}://${req.get('host')}/${req.file.filename}`
    ];

    db.query(q, values, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Erro ao adicionar produto" });
      }
      return res.status(200).json("Produto cadastrado com sucesso!");
    });
  };

  export const deleteProducts = (req, res) => {
    const q = "DELETE FROM produtos WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err)

        return res.status(200).json('usuario deletado com sucesso')
    })
}
export const Login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.send(error);
        }
        if (response) {
          res.send({ msg: "Usuário logado com sucesso!" });
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      });
    } else {
      res.send({ msg: "Usuário não registrado!" });
    }
  });
};

export const Register = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query(
          "INSERT INTO usuarios (email, password) VALUE (?,?)",
          [email, hash],
          (error, response) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "Usuário cadastrado com sucesso" });
          }
        );
      });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
}