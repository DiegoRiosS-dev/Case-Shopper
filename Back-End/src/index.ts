import { app } from "./app";
import { clientRouter } from "./routes/ClientRouter";
import { orderRouter } from "./routes/OrderRouter";
import { productRouter } from "./routes/ProductRouter";

app.use("/product", productRouter)

app.use("/client", clientRouter)

app.use("/order", orderRouter)


