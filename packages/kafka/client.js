
import kafka from "kafkajs";
const kafka = new Kafka({

    clientId: process.env.SERVICE_NAME,

    brokers: process.env.KAFKA_BROKER.split(",")

});
export default kafka;