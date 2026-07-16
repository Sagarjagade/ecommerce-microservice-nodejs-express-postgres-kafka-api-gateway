
import kafka from "./client.js";
import producer from "./producer.js";

async function connect() {
    if (!producer) {
        producer = kafka.producer();

        await producer.connect();

        console.log("Kafka Producer Connected");
    }

    return producer;
}

async function publish(topic, message) {

    const producer = await connectProducer();

    await producer.send({
        topic,
        messages: [
            {
                value: JSON.stringify(message),
            },
        ],
    });

}

export {

    connect,

    publish

};