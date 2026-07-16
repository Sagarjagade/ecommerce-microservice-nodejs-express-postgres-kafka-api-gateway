
import kafka from "./kafka.js";
import logger from "../logger.js";
const admin = kafka.admin();

const createTopics = async (topics) => {

    await admin.connect();

    await admin.createTopics({

        waitForLeaders: true,

        topics,

    });

    logger.info("Kafka Topics Created");

    await admin.disconnect();

};

export default {

    createTopics,

};