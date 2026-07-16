
import app from "./app.js";
import producer from "./kafka/producer.js";

const PORT = process.env.PORT || 3002;

(async () => {

    await producer.connectProducer();

    app.listen(PORT, () => {

        console.log(`Server Started ${PORT}`);

    });

})();