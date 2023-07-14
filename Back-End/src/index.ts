import { app } from "./app";
import { clientRouter } from "./routes/ClientRouter";
import { productRouter } from "./routes/ProductRouter";

app.use("/product", productRouter)

app.use("/client", clientRouter)
