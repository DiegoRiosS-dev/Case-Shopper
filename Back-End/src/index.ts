import { app } from "./app";
import { clientRouter } from "./routes/ClientRouter";
import { orderRouter } from "./routes/OrderRouter";
import { productRouter } from "./routes/ProductRouter";
import { DateVerify } from "./services/DateVerify";

app.use("/product", productRouter)

app.use("/client", clientRouter)

app.use("/order", orderRouter)
// const test = new DateVerify().dateVerify;

// const {DMA,codeErr,errorMsg,validDate} = test("15/07/2023")
// console.log("Codigo", codeErr)
// console.log("Mensagem", errorMsg)
// console.log("Data é valida?", validDate)
// console.log("Data", DMA)
// console.log( new Date(`${DMA[2]}/${DMA[1]}/${DMA[0]}`).toISOString().slice(0,10))