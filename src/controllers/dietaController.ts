import { FastifyReply, FastifyRequest } from "fastify";
import { geminiResp } from "../config/gemini";

export class dietaController {
  async generateDieta(
    req: FastifyRequest<{ Body: { text: string } }>,
    reply: FastifyReply
  ) {
    const { text } = req.body;
    try {
      const resposta = await geminiResp({
        prompt: text,
      });
      return reply.status(200).send(resposta);
    } catch (error) {
      return reply.status(500).send(error);
    }
  }
}
