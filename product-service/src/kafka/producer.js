
import kafka from "./client.js";
const producer = kafka.producer();

const connectProducer = async () => {

    await producer.connect();

    console.log("Kafka Producer Connected");

};

const publish = async (topic, message) => {

    await producer.send({

        topic,

        messages: [

            {

                value: JSON.stringify(message)

            }

        ]

    });

};

export {

    connectProducer,

    publish

};