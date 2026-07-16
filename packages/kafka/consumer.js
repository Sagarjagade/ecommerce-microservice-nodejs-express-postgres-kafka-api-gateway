
import kafka from "./client.js";
async function createConsumer(groupId, topic, handler) {

    const consumer = kafka.consumer({

        groupId

    });

    await consumer.connect();

    for (const topic of topics) {
        await consumer.subscribe({
            topic,
            fromBeginning: false,
        });
    }

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {

            const data = JSON.parse(
                message.value.toString()
            );

            await handler({
                topic,
                partition,
                data,
            });
        },
    });

    console.log(`${groupId} Consumer Connected`);

    return consumer;

}

const disconnectConsumers = async () => {

    for (const consumer of consumers) {

        await consumer.disconnect();

    }

    logger.info("All Kafka Consumers Disconnected");

};

export default {

    createConsumer,

    disconnectConsumers,

};