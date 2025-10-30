import express from 'express';
import usersRoutes from './routes/users.js';
import contractRoutes from './routes/contract.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/users', usersRoutes);
app.use("/api/contract", contractRoutes);


// Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
