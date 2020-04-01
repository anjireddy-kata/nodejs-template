import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
    // This error should crash whole process

    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
    /**
     * Your favorite port
     */
    port: parseInt(process.env.PORT, 10),

    db: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        userName: process.env.DB_USER_NAME,
        password: process.env.DB_PWD,
    },
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },

    /**
     * Your secret sauce
     */
    jwtSecret: process.env.JWT_SECRET,

    /**
     * API configs
     */
    api: {
        prefix: '/api',
    },
};