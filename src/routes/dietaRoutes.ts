import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { dietaController } from "../controllers/dietaController";

export default async function dietaRoutes(app: FastifyInstance) {
  app.post(
    "/gerar",
    async (
      req: FastifyRequest<{ Body: { text: string } }>,
      reply: FastifyReply
    ) => {
      return new dietaController().generateDieta(req, reply);
    }
  );
}
