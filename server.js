const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');
connectDB();
app.use(cors());
app.use(express.json({extended:false}))


app.get('/',(req,res)=>res.send('API Runnig'));

app.use('/api/users',require('./routers/api/users'));
app.use('/api/auth',require('./routers/api/auth'));
app.use('/api/profile',require('./routers/api/profile'));
app.use('/api/type',require('./routers/api/type'));
app.use('/api/model_',require('./routers/api/model_'));
app.use('/api/mode_consommation',require('./routers/api/mode_consommation'));
app.use('/api/mesure_unit',require('./routers/api/mesure_unit'));
app.use('/api/color',require('./routers/api/color'));
app.use('/api/marque',require('./routers/api/marque'));
app.use('/api/categorie',require('./routers/api/categorie'));
app.use('/api/article',require('./routers/api/article'));
app.use('/api/posts',require('./routers/api/posts'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server Started on Port '+PORT));