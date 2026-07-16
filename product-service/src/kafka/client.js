
import dotenv from "dotenv";
dotenv.config();
import { Kafka } from "kafkajs";
const kafka = new Kafka({

    clientId: "product-service",

    brokers: [
        process.env.KAFKA_BROKER
    ]

});
export default kafka;