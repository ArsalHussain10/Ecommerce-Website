import stripe from 'stripe';
const {
    PORT,
    MONGO_URL,
    secretKey,
    emailSendUser,
    emailSendPassword,
    stripeSecretKey,
    stripePublishableKey,
} = process.env;

const stripeClient = stripe(stripeSecretKey);
const stripeClient2 = stripe(stripePublishableKey);


export {
    PORT,
    MONGO_URL,
    secretKey,
    emailSendUser,
    emailSendPassword,
    stripeSecretKey,
    stripePublishableKey,
    stripeClient,
    stripeClient2
}