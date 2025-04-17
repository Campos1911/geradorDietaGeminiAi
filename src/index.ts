import fastify from "fastify";
import cors from "@fastify/cors";
import dietaRoutes from "./routes/dietaRoutes";

const app = fastify();

app.register(cors);
app.register(dietaRoutes);

app
  .listen({ port: 3333 })
  .then(() => console.log("Servidor rodando..."))
  .catch((err) => console.log(err));
