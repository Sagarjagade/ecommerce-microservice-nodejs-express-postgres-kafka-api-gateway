export const createEvent = (
    eventType,
    payload,
    metadata = {}
) => {

    return {

        eventType,

        payload,

        metadata: {

            source: process.env.SERVICE_NAME,

            timestamp: new Date().toISOString(),

            version: "1.0",

            correlationId:

                metadata.correlationId ||

                null,

            requestId:

                metadata.requestId ||

                null,

        },

    };

};