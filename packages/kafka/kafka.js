
import { kafka, logLevel } from "kafkajs";
import logger from "../logger.js";
import constants from "./constants.js";

const kafka = new Kafka({
    clientId: process.env.KAFKA_CLIENT_ID || "microservice-app",
    brokers: (process.env.KAFKA_BROKERS || "localhost:9092").split(","),
    connectionTimeout: constants.CONNECTION_TIMEOUT,

    requestTimeout: constants.REQUEST_TIMEOUT,

    retry: {
        retries: constants.RETRY_COUNT,
        initialRetryTime: constants.INITIAL_RETRY_TIME,
        maxRetryTime: constants.MAX_RETRY_TIME,
    },

    logLevel: logLevel.NOTHING,
});
export default kafka;