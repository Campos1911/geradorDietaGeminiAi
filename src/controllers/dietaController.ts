import { FastifyReply, FastifyRequest } from "fastify";
import { geminiResp } from "../config/gemini";
import { Nodemailer } from "../config/mailer";

export class dietaController {
  async generateDieta(
    req: FastifyRequest<{
      Body: {
        peso: number;
        altura: number;
        idade: number;
        focoDieta: string;
        sexo: string;
      };
    }>,
    reply: FastifyReply
  ) {
    const { peso, altura, idade, focoDieta, sexo } = req.body;
    const mailer = new Nodemailer();
    try {
      const resposta = await geminiResp({
        prompt: `Por favor, gere uma dieta para mim, separada em tópicos por refeição. Tenho ${altura}cm de altura, peso ${peso}, sou do sexo ${sexo} e tenho ${idade} anos. Quero uma dieta focada em ${focoDieta}. Não use caracteres especiais, vou enviar essa resposta via email! Além disso, oculte seus comentários, envie a resposta em formato HTML (não enviei com nada que não seja da estrutura HTML) e coloque quantas calorias serão consumidas por refeição e ao final do dia, por favor!`,
      });
      if (resposta) {
        mailer.enviarEmail({
          to: "anthonithomes@gmail.com",
          html: resposta.replaceAll("```html", "").replaceAll("```", ""),
          subject: "Sua dieta personalizada!",
          text: "",
        });
      }
      return reply.status(200).send({ message: "Dieta enviada!" });
    } catch (error) {
      return reply.status(500).send(error);
    }
  }
}
