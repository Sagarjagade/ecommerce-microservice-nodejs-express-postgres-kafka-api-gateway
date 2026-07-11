import app from './src/app.js'
import sequelize from './src/config/db.js'

const PORT = process.env.PORT || 3001;

sequelize
    .sync()
    .then(() => {
        console.log(" Database Connected");

        app.listen(PORT, () => {
            console.log(` Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Database Connection Failed:", err);
    });