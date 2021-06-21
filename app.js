const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db.js');
const spawn = require('child_process').spawn;
const rateLimiter = require("./middlewares/rate-limiter");
const { NotFoundMiddleware, ErrorMiddleware} = require('./middlewares');
const redis = require("redis");

const {
  Loreto, 
  Amazonas,
  Tumbes,
  Piura,
  Lambayeque,
  Cajamarca,
  LaLibertad,
  Ancash,
  SanMartin,
  Huanuco,
  Ucayali,
  Pasco,
  Lima,
  Junin,
  Huancavelica,
  Ica,
  Ayacucho,
  Apurimac,
  Cusco,
  MadreDeDios,
  Puno,
  Arequipa,
  Moquegua,
  Tacna,
  Callao} = require('./models/RegionModel');
const Peru = require('./models/PeruModel');

require('dotenv').config({path: './variables.env'});
const client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
const port = process.env.PORT || 4000
connectDB();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(rateLimiter({time_restore: 86400, number_requests: 1000}));




global.peru = {};
let pythonPeruProcess = spawn('python', ['./python/peru.py']);
pythonPeruProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();
    
    //convert string into json
    global.peru = JSON.parse(mystr);
    const count = await Peru.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Peru.find({}).limit(1);
      await Peru.deleteOne({_id: primer_elemento[0]._id});
      const peru = await Peru.create(global.peru);
      console.log(peru);
    }else{
      const peru = await Peru.create(global.peru);
      console.log(peru);
    }   
})

global.amazonas = {};
let pythonAmazonasProcess = spawn('python', ['./python/departamentos/amazonas.py']);
pythonAmazonasProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();
    
    //convert string into json
    global.amazonas = JSON.parse(mystr);
    const count = await Amazonas.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Amazonas.find({}).limit(1);
      await Amazonas.deleteOne({_id: primer_elemento[0]._id});
      const amazonas = await Amazonas.create(global.amazonas);
      console.log(amazonas);
    }else{
      const amazonas = await Amazonas.create(global.amazonas);
      console.log(amazonas);
    }
})

global.ancash = {};
let pythonAncashProcess = spawn('python', ['./python/departamentos/ancash.py']);
pythonAncashProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();
    
    //convert string into json
    global.ancash = JSON.parse(mystr);
    const count = await Ancash.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Ancash.find({}).limit(1);
      await Ancash.deleteOne({_id: primer_elemento[0]._id});
      const ancash = await Ancash.create(global.ancash);
      console.log(ancash);
    }else{
      const ancash = await Ancash.create(global.ancash);
      console.log(ancash);
    }    
})

global.apurimac = {};
let pythonApurimacProcess = spawn('python', ['./python/departamentos/apurimac.py']);
pythonApurimacProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();
    
    //convert string into json
    global.apurimac = JSON.parse(mystr);
    const count = await Apurimac.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Apurimac.find({}).limit(1);
      await Apurimac.deleteOne({_id: primer_elemento[0]._id});
      const apurimac = await Apurimac.create(global.apurimac);
      console.log(apurimac);
    }else{
      const apurimac = await Apurimac.create(global.apurimac);
      console.log(apurimac);
    }  
})

global.arequipa = {};
let pythonArequipaProcess = spawn('python', ['./python/departamentos/arequipa.py']);
pythonArequipaProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.arequipa = JSON.parse(mystr);
    const count = await Arequipa.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Arequipa.find({}).limit(1);
      await Arequipa.deleteOne({_id: primer_elemento[0]._id});
      const arequipa = await Arequipa.create(global.arequipa);
      console.log(arequipa);
    }else{
      const arequipa = await Arequipa.create(global.arequipa);
      console.log(arequipa);
    }    
})

global.ayacucho = {};
let pythonAyacuchoProcess = spawn('python', ['./python/departamentos/ayacucho.py']);
pythonAyacuchoProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.ayacucho = JSON.parse(mystr);
    const count = await Ayacucho.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Ayacucho.find({}).limit(1);
      await Ayacucho.deleteOne({_id: primer_elemento[0]._id});
      const ayacucho = await Ayacucho.create(global.ayacucho);
      console.log(ayacucho);
    }else{
      const ayacucho = await Ayacucho.create(global.ayacucho);
      console.log(ayacucho);
    }     
})

global.cajamarca = {};
let pythonCajamarcaProcess = spawn('python', ['./python/departamentos/cajamarca.py']);
pythonCajamarcaProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.cajamarca = JSON.parse(mystr);
    const count = await Cajamarca.countDocuments({});

    if(count > 100){
      const primer_elemento = await Cajamarca.find({}).limit(1);
      await Cajamarca.deleteOne({_id: primer_elemento[0]._id});
      const cajamarca = await Cajamarca.create(global.cajamarca);
      console.log(cajamarca);
    }else{
      const cajamarca = await Cajamarca.create(global.cajamarca);
      console.log(cajamarca);
    }   
})

global.callao = {};
let pythonCallaoProcess = spawn('python', ['./python/departamentos/callao.py']);
pythonCallaoProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.callao = JSON.parse(mystr);
    const count = await Callao.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Callao.find({}).limit(1);
      await Callao.deleteOne({_id: primer_elemento[0]._id});
      const callao = await Callao.create(global.callao);
      console.log(callao);
    }else{
      const callao = await Callao.create(global.callao);
      console.log(callao);
    }    
})

global.cusco = {};
let pythonCuscoProcess = spawn('python', ['./python/departamentos/cusco.py']);
pythonCuscoProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.cusco = JSON.parse(mystr);
    const count = await Cusco.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Cusco.find({}).limit(1);
      await Cusco.deleteOne({_id: primer_elemento[0]._id});
      const cusco = await Cusco.create(global.cusco);
      console.log(cusco);
    }else{
      const cusco = await Cusco.create(global.cusco);
      console.log(cusco);
    }  
})

global.huancavelica = {};
let pythonHuancavelicaProcess = spawn('python', ['./python/departamentos/huancavelica.py']);
pythonHuancavelicaProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.huancavelica = JSON.parse(mystr);
    const count = await Huancavelica.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Huancavelica.find({}).limit(1);
      await Huancavelica.deleteOne({_id: primer_elemento[0]._id});
      const huancavelica = await Huancavelica.create(global.huancavelica);
      console.log(huancavelica);
    }else{
      const huancavelica = await Huancavelica.create(global.huancavelica);
      console.log(huancavelica);
    }     
})

global.huanuco = {};
let pythonHuanucoProcess = spawn('python', ['./python/departamentos/huanuco.py']);
pythonHuanucoProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.huanuco = JSON.parse(mystr);
    const count = await Huanuco.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Huanuco.find({}).limit(1);
      await Huanuco.deleteOne({_id: primer_elemento[0]._id});
      const huanuco = await Huanuco.create(global.huanuco);
      console.log(huanuco);
    }else{
      const huanuco = await Huanuco.create(global.huanuco);
      console.log(huanuco);
    } 
})

global.ica = {};
let pythonIcaProcess = spawn('python', ['./python/departamentos/ica.py']);
pythonIcaProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.ica = JSON.parse(mystr);
    const count = await Ica.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Ica.find({}).limit(1);
      await Ica.deleteOne({_id: primer_elemento[0]._id});
      const ica = await Ica.create(global.ica);
      console.log(ica);
    }else{
      const ica = await Ica.create(global.ica);
      console.log(ica);
    }      
})

global.junin = {};
let pythonJuninProcess = spawn('python', ['./python/departamentos/junin.py']);
pythonJuninProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.junin = JSON.parse(mystr);
    const count = await Junin.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Junin.find({}).limit(1);
      await Junin.deleteOne({_id: primer_elemento[0]._id});
      const junin = await Junin.create(global.junin);
      console.log(junin);
    }else{
      const junin = await Junin.create(global.junin);
      console.log(junin);
    }   
})

global.lalibertad = {};
let pythonLaLibertadProcess = spawn('python', ['./python/departamentos/la_libertad.py']);
pythonLaLibertadProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.lalibertad = JSON.parse(mystr);
    const count = await LaLibertad.countDocuments({});
    

    if(count > 100){
      const primer_elemento = await LaLibertad.find({}).limit(1);
      await LaLibertad.deleteOne({_id: primer_elemento[0]._id});
      const lalibertad = await LaLibertad.create(global.lalibertad);
      console.log(lalibertad);
    }else{
      const lalibertad = await LaLibertad.create(global.lalibertad);
      console.log(lalibertad);
    }
})

global.lambayeque = {};
let pythonLambayequeProcess = spawn('python', ['./python/departamentos/lambayeque.py']);
pythonLambayequeProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.lambayeque = JSON.parse(mystr);
    const count = await Lambayeque.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Lambayeque.find({}).limit(1);
      await Lambayeque.deleteOne({_id: primer_elemento[0]._id});
      const lambayeque = await Lambayeque.create(global.lambayeque);
      console.log(lambayeque);
    }else{
      const lambayeque = await Lambayeque.create(global.lambayeque);
      console.log(lambayeque);
    }  
})

global.lima = {};
let pythonLimaProcess = spawn('python', ['./python/departamentos/lima.py']);
pythonLimaProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.lima = JSON.parse(mystr);
    const count = await Lima.countDocuments({});
    

    if(count > 100){
      const primer_elemento = await Lima.find({}).limit(1);
      await Lima.deleteOne({_id: primer_elemento[0]._id});
      const lima = await Lima.create(global.lima);
      console.log(lima);
    }else{
      const lima = await Lima.create(global.lima);
      console.log(lima);
    } 
})

global.loreto = {};
let pythonLoretoProcess = spawn('python', ['./python/departamentos/loreto.py']);
pythonLoretoProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.loreto = JSON.parse(mystr);
    const count = await Loreto.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Loreto.find({}).limit(1);
      await Loreto.deleteOne({_id: primer_elemento[0]._id});
      const loreto = await Loreto.create(global.loreto);
      console.log(loreto);
    }else{
      const loreto = await Loreto.create(global.loreto);
      console.log(loreto);
    }    
})


global.madrededios = {};
let pythonMadreDeDiosProcess = spawn('python', ['./python/departamentos/madre_de_dios.py']);
pythonMadreDeDiosProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();
    
    //convert string into json
    global.madrededios = JSON.parse(mystr);
    const count = await MadreDeDios.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await MadreDeDios.find({}).limit(1);
      await MadreDeDios.deleteOne({_id: primer_elemento[0]._id});
      const madrededios = await MadreDeDios.create(global.madrededios);
      console.log(madrededios);
    }else{
      const madrededios = await MadreDeDios.create(global.madrededios);
      console.log(madrededios);
    }      
})

global.moquegua = {};
let pythonMoqueguaProcess = spawn('python', ['./python/departamentos/moquegua.py']);
pythonMoqueguaProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.moquegua = JSON.parse(mystr);
    const count = await Moquegua.countDocuments({});

    if(count > 100){
      const primer_elemento = await Moquegua.find({}).limit(1);
      await Moquegua.deleteOne({_id: primer_elemento[0]._id});
      const moquegua = await Moquegua.create(global.moquegua);
      console.log(moquegua);
    }else{
      const moquegua = await Moquegua.create(global.moquegua);
      console.log(moquegua);
    }     
})

global.pasco = {};
let pythonPascoProcess = spawn('python', ['./python/departamentos/pasco.py']);
pythonPascoProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json  
    global.pasco = JSON.parse(mystr);
    const count = await Pasco.countDocuments({});

    if(count > 100){
      const primer_elemento = await Pasco.find({}).limit(1);
      await Pasco.deleteOne({_id: primer_elemento[0]._id});
      const pasco = await Pasco.create(global.pasco);
      console.log(pasco);
    }else{
      const pasco = await Pasco.create(global.pasco);
      console.log(pasco);
    }  
})

global.piura = {};
let pythonPiuraProcess = spawn('python', ['./python/departamentos/piura.py']);
pythonPiuraProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();    

    //convert string into json
    global.piura = JSON.parse(mystr);
    const count = await Piura.countDocuments({});

    if(count > 100){
      const primer_elemento = await Piura.find({}).limit(1);
      await Piura.deleteOne({_id: primer_elemento[0]._id});
      const piura = await Piura.create(global.piura);
      console.log(piura);
    }else{
      const piura = await Piura.create(global.piura);
      console.log(piura);
    }   
})

global.puno = {};
let pythonPunoProcess = spawn('python', ['./python/departamentos/puno.py']);
pythonPunoProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.puno = JSON.parse(mystr);
    const count = await Puno.countDocuments({});

    if(count > 100){
      const primer_elemento = await Puno.find({}).limit(1);
      await Puno.deleteOne({_id: primer_elemento[0]._id});
      const puno = await Puno.create(global.puno);
      console.log(puno);
    }else{
      const puno = await Puno.create(global.puno);
      console.log(puno);
    }    
})

global.sanmartin = {};
let pythonSanMartinProcess = spawn('python', ['./python/departamentos/san_martin.py']);
pythonSanMartinProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();
    
    //convert string into json
    global.sanmartin = JSON.parse(mystr);
    const count = await SanMartin.countDocuments({});

    if(count > 100){
      const primer_elemento = await SanMartin.find({}).limit(1);
      await SanMartin.deleteOne({_id: primer_elemento[0]._id});
      const sanmartin = await SanMartin.create(global.sanmartin);
      console.log(sanmartin);
    }else{
      const sanmartin = await SanMartin.create(global.sanmartin);
      console.log(sanmartin);
    }
})

global.tacna = {};
let pythonTacnaProcess = spawn('python', ['./python/departamentos/tacna.py']);
pythonTacnaProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.tacna = JSON.parse(mystr);
    const count = await Tacna.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Tacna.find({}).limit(1).sort({createdAt: 1});
      await Tacna.deleteOne({_id: primer_elemento[0]._id});
      const tacna = await Tacna.create(global.tacna);
      console.log(tacna);
    }else{
      const tacna = await Tacna.create(global.tacna);
      console.log(tacna);
    }     
})

global.tumbes = {};
let pythonTumbesProcess = spawn('python', ['./python/departamentos/tumbes.py']);
pythonTumbesProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.tumbes = JSON.parse(mystr);
    const count = await Tumbes.countDocuments({});
    if(count > 100){
      const primer_elemento = await Tumbes.find({}).limit(1);
      await Tumbes.deleteOne({_id: primer_elemento[0]._id});
      const tumbes = await Tumbes.create(global.tumbes);
      console.log(tumbes);
    }else{
      const tumbes = await Tumbes.create(global.tumbes);
      console.log(tumbes);
    }
})

global.ucayali = {};
let pythonUcayaliProcess = spawn('python', ['./python/departamentos/ucayali.py']);
pythonUcayaliProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.ucayali = JSON.parse(mystr);
    const count = await Ucayali.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Ucayali.find({}).limit(1);
      await Ucayali.deleteOne({_id: primer_elemento[0]._id});
      const ucayali = await Ucayali.create(global.ucayali);
      console.log(ucayali);
    }else{
      const ucayali = await Ucayali.create(global.ucayali);
      console.log(ucayali);
    } 
})



// global.busqueda = []
// let pythonBusquedaProcess = spawn('python', ['./python/busqueda.py']);
// pythonBusquedaProcess.stdout.on('data', async (data) => {
//     //convert string to Json
//     mystr = data.toString();

//     //convert string into json
//     global.busqueda = JSON.parse(mystr);    
//     await Departamento.deleteMany({});
//     const departamentos = await Departamento.insertMany(global.busqueda);
//     console.log(departamentos.length);
// })

setInterval(()=>{
client.flushall('ASYNC', () => {
  console.log("Datos borrados correctamente");
});

global.peru = {};
let pythonPeruProcess = spawn('python', ['./python/peru.py']);
pythonPeruProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();
    
    //convert string into json
    global.peru = JSON.parse(mystr);
    const count = await Peru.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Peru.find({}).limit(1);
      await Peru.deleteOne({_id: primer_elemento[0]._id});
      const peru = await Peru.create(global.peru);
      console.log(peru);
    }else{
      const peru = await Peru.create(global.peru);
      console.log(peru);
    }   
})

global.amazonas = {};
let pythonAmazonasProcess = spawn('python', ['./python/departamentos/amazonas.py']);
pythonAmazonasProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();
    
    //convert string into json
    global.amazonas = JSON.parse(mystr);
    const count = await Amazonas.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Amazonas.find({}).limit(1);
      await Amazonas.deleteOne({_id: primer_elemento[0]._id});
      const amazonas = await Amazonas.create(global.amazonas);
      console.log(amazonas);
    }else{
      const amazonas = await Amazonas.create(global.amazonas);
      console.log(amazonas);
    }
})

global.ancash = {};
let pythonAncashProcess = spawn('python', ['./python/departamentos/ancash.py']);
pythonAncashProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();
    
    //convert string into json
    global.ancash = JSON.parse(mystr);
    const count = await Ancash.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Ancash.find({}).limit(1);
      await Ancash.deleteOne({_id: primer_elemento[0]._id});
      const ancash = await Ancash.create(global.ancash);
      console.log(ancash);
    }else{
      const ancash = await Ancash.create(global.ancash);
      console.log(ancash);
    }    
})

global.apurimac = {};
let pythonApurimacProcess = spawn('python', ['./python/departamentos/apurimac.py']);
pythonApurimacProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();
    
    //convert string into json
    global.apurimac = JSON.parse(mystr);
    const count = await Apurimac.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Apurimac.find({}).limit(1);
      await Apurimac.deleteOne({_id: primer_elemento[0]._id});
      const apurimac = await Apurimac.create(global.apurimac);
      console.log(apurimac);
    }else{
      const apurimac = await Apurimac.create(global.apurimac);
      console.log(apurimac);
    }  
})

global.arequipa = {};
let pythonArequipaProcess = spawn('python', ['./python/departamentos/arequipa.py']);
pythonArequipaProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.arequipa = JSON.parse(mystr);
    const count = await Arequipa.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Arequipa.find({}).limit(1);
      await Arequipa.deleteOne({_id: primer_elemento[0]._id});
      const arequipa = await Arequipa.create(global.arequipa);
      console.log(arequipa);
    }else{
      const arequipa = await Arequipa.create(global.arequipa);
      console.log(arequipa);
    }    
})

global.ayacucho = {};
let pythonAyacuchoProcess = spawn('python', ['./python/departamentos/ayacucho.py']);
pythonAyacuchoProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.ayacucho = JSON.parse(mystr);
    const count = await Ayacucho.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Ayacucho.find({}).limit(1);
      await Ayacucho.deleteOne({_id: primer_elemento[0]._id});
      const ayacucho = await Ayacucho.create(global.ayacucho);
      console.log(ayacucho);
    }else{
      const ayacucho = await Ayacucho.create(global.ayacucho);
      console.log(ayacucho);
    }     
})

global.cajamarca = {};
let pythonCajamarcaProcess = spawn('python', ['./python/departamentos/cajamarca.py']);
pythonCajamarcaProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.cajamarca = JSON.parse(mystr);
    const count = await Cajamarca.countDocuments({});

    if(count > 100){
      const primer_elemento = await Cajamarca.find({}).limit(1);
      await Cajamarca.deleteOne({_id: primer_elemento[0]._id});
      const cajamarca = await Cajamarca.create(global.cajamarca);
      console.log(cajamarca);
    }else{
      const cajamarca = await Cajamarca.create(global.cajamarca);
      console.log(cajamarca);
    }   
})

global.callao = {};
let pythonCallaoProcess = spawn('python', ['./python/departamentos/callao.py']);
pythonCallaoProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.callao = JSON.parse(mystr);
    const count = await Callao.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Callao.find({}).limit(1);
      await Callao.deleteOne({_id: primer_elemento[0]._id});
      const callao = await Callao.create(global.callao);
      console.log(callao);
    }else{
      const callao = await Callao.create(global.callao);
      console.log(callao);
    }    
})

global.cusco = {};
let pythonCuscoProcess = spawn('python', ['./python/departamentos/cusco.py']);
pythonCuscoProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.cusco = JSON.parse(mystr);
    const count = await Cusco.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Cusco.find({}).limit(1);
      await Cusco.deleteOne({_id: primer_elemento[0]._id});
      const cusco = await Cusco.create(global.cusco);
      console.log(cusco);
    }else{
      const cusco = await Cusco.create(global.cusco);
      console.log(cusco);
    }  
})

global.huancavelica = {};
let pythonHuancavelicaProcess = spawn('python', ['./python/departamentos/huancavelica.py']);
pythonHuancavelicaProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.huancavelica = JSON.parse(mystr);
    const count = await Huancavelica.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Huancavelica.find({}).limit(1);
      await Huancavelica.deleteOne({_id: primer_elemento[0]._id});
      const huancavelica = await Huancavelica.create(global.huancavelica);
      console.log(huancavelica);
    }else{
      const huancavelica = await Huancavelica.create(global.huancavelica);
      console.log(huancavelica);
    }     
})

global.huanuco = {};
let pythonHuanucoProcess = spawn('python', ['./python/departamentos/huanuco.py']);
pythonHuanucoProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.huanuco = JSON.parse(mystr);
    const count = await Huanuco.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Huanuco.find({}).limit(1);
      await Huanuco.deleteOne({_id: primer_elemento[0]._id});
      const huanuco = await Huanuco.create(global.huanuco);
      console.log(huanuco);
    }else{
      const huanuco = await Huanuco.create(global.huanuco);
      console.log(huanuco);
    } 
})

global.ica = {};
let pythonIcaProcess = spawn('python', ['./python/departamentos/ica.py']);
pythonIcaProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.ica = JSON.parse(mystr);
    const count = await Ica.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Ica.find({}).limit(1);
      await Ica.deleteOne({_id: primer_elemento[0]._id});
      const ica = await Ica.create(global.ica);
      console.log(ica);
    }else{
      const ica = await Ica.create(global.ica);
      console.log(ica);
    }      
})

global.junin = {};
let pythonJuninProcess = spawn('python', ['./python/departamentos/junin.py']);
pythonJuninProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.junin = JSON.parse(mystr);
    const count = await Junin.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Junin.find({}).limit(1);
      await Junin.deleteOne({_id: primer_elemento[0]._id});
      const junin = await Junin.create(global.junin);
      console.log(junin);
    }else{
      const junin = await Junin.create(global.junin);
      console.log(junin);
    }   
})

global.lalibertad = {};
let pythonLaLibertadProcess = spawn('python', ['./python/departamentos/la_libertad.py']);
pythonLaLibertadProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.lalibertad = JSON.parse(mystr);
    const count = await LaLibertad.countDocuments({});
    

    if(count > 100){
      const primer_elemento = await LaLibertad.find({}).limit(1);
      await LaLibertad.deleteOne({_id: primer_elemento[0]._id});
      const lalibertad = await LaLibertad.create(global.lalibertad);
      console.log(lalibertad);
    }else{
      const lalibertad = await LaLibertad.create(global.lalibertad);
      console.log(lalibertad);
    }
})

global.lambayeque = {};
let pythonLambayequeProcess = spawn('python', ['./python/departamentos/lambayeque.py']);
pythonLambayequeProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.lambayeque = JSON.parse(mystr);
    const count = await Lambayeque.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Lambayeque.find({}).limit(1);
      await Lambayeque.deleteOne({_id: primer_elemento[0]._id});
      const lambayeque = await Lambayeque.create(global.lambayeque);
      console.log(lambayeque);
    }else{
      const lambayeque = await Lambayeque.create(global.lambayeque);
      console.log(lambayeque);
    }  
})

global.lima = {};
let pythonLimaProcess = spawn('python', ['./python/departamentos/lima.py']);
pythonLimaProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.lima = JSON.parse(mystr);
    const count = await Lima.countDocuments({});
    

    if(count > 100){
      const primer_elemento = await Lima.find({}).limit(1);
      await Lima.deleteOne({_id: primer_elemento[0]._id});
      const lima = await Lima.create(global.lima);
      console.log(lima);
    }else{
      const lima = await Lima.create(global.lima);
      console.log(lima);
    } 
})

global.loreto = {};
let pythonLoretoProcess = spawn('python', ['./python/departamentos/loreto.py']);
pythonLoretoProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.loreto = JSON.parse(mystr);
    const count = await Loreto.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Loreto.find({}).limit(1);
      await Loreto.deleteOne({_id: primer_elemento[0]._id});
      const loreto = await Loreto.create(global.loreto);
      console.log(loreto);
    }else{
      const loreto = await Loreto.create(global.loreto);
      console.log(loreto);
    }    
})


global.madrededios = {};
let pythonMadreDeDiosProcess = spawn('python', ['./python/departamentos/madre_de_dios.py']);
pythonMadreDeDiosProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();
    
    //convert string into json
    global.madrededios = JSON.parse(mystr);
    const count = await MadreDeDios.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await MadreDeDios.find({}).limit(1);
      await MadreDeDios.deleteOne({_id: primer_elemento[0]._id});
      const madrededios = await MadreDeDios.create(global.madrededios);
      console.log(madrededios);
    }else{
      const madrededios = await MadreDeDios.create(global.madrededios);
      console.log(madrededios);
    }      
})

global.moquegua = {};
let pythonMoqueguaProcess = spawn('python', ['./python/departamentos/moquegua.py']);
pythonMoqueguaProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.moquegua = JSON.parse(mystr);
    const count = await Moquegua.countDocuments({});

    if(count > 100){
      const primer_elemento = await Moquegua.find({}).limit(1);
      await Moquegua.deleteOne({_id: primer_elemento[0]._id});
      const moquegua = await Moquegua.create(global.moquegua);
      console.log(moquegua);
    }else{
      const moquegua = await Moquegua.create(global.moquegua);
      console.log(moquegua);
    }     
})

global.pasco = {};
let pythonPascoProcess = spawn('python', ['./python/departamentos/pasco.py']);
pythonPascoProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json  
    global.pasco = JSON.parse(mystr);
    const count = await Pasco.countDocuments({});

    if(count > 100){
      const primer_elemento = await Pasco.find({}).limit(1);
      await Pasco.deleteOne({_id: primer_elemento[0]._id});
      const pasco = await Pasco.create(global.pasco);
      console.log(pasco);
    }else{
      const pasco = await Pasco.create(global.pasco);
      console.log(pasco);
    }  
})

global.piura = {};
let pythonPiuraProcess = spawn('python', ['./python/departamentos/piura.py']);
pythonPiuraProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();    

    //convert string into json
    global.piura = JSON.parse(mystr);
    const count = await Piura.countDocuments({});

    if(count > 100){
      const primer_elemento = await Piura.find({}).limit(1);
      await Piura.deleteOne({_id: primer_elemento[0]._id});
      const piura = await Piura.create(global.piura);
      console.log(piura);
    }else{
      const piura = await Piura.create(global.piura);
      console.log(piura);
    }   
})

global.puno = {};
let pythonPunoProcess = spawn('python', ['./python/departamentos/puno.py']);
pythonPunoProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.puno = JSON.parse(mystr);
    const count = await Puno.countDocuments({});

    if(count > 100){
      const primer_elemento = await Puno.find({}).limit(1);
      await Puno.deleteOne({_id: primer_elemento[0]._id});
      const puno = await Puno.create(global.puno);
      console.log(puno);
    }else{
      const puno = await Puno.create(global.puno);
      console.log(puno);
    }    
})

global.sanmartin = {};
let pythonSanMartinProcess = spawn('python', ['./python/departamentos/san_martin.py']);
pythonSanMartinProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();
    
    //convert string into json
    global.sanmartin = JSON.parse(mystr);
    const count = await SanMartin.countDocuments({});

    if(count > 100){
      const primer_elemento = await SanMartin.find({}).limit(1);
      await SanMartin.deleteOne({_id: primer_elemento[0]._id});
      const sanmartin = await SanMartin.create(global.sanmartin);
      console.log(sanmartin);
    }else{
      const sanmartin = await SanMartin.create(global.sanmartin);
      console.log(sanmartin);
    }
})

global.tacna = {};
let pythonTacnaProcess = spawn('python', ['./python/departamentos/tacna.py']);
pythonTacnaProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.tacna = JSON.parse(mystr);
    const count = await Tacna.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Tacna.find({}).limit(1).sort({createdAt: 1});
      await Tacna.deleteOne({_id: primer_elemento[0]._id});
      const tacna = await Tacna.create(global.tacna);
      console.log(tacna);
    }else{
      const tacna = await Tacna.create(global.tacna);
      console.log(tacna);
    }     
})

global.tumbes = {};
let pythonTumbesProcess = spawn('python', ['./python/departamentos/tumbes.py']);
pythonTumbesProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.tumbes = JSON.parse(mystr);
    const count = await Tumbes.countDocuments({});
    if(count > 100){
      const primer_elemento = await Tumbes.find({}).limit(1);
      await Tumbes.deleteOne({_id: primer_elemento[0]._id});
      const tumbes = await Tumbes.create(global.tumbes);
      console.log(tumbes);
    }else{
      const tumbes = await Tumbes.create(global.tumbes);
      console.log(tumbes);
    }
})

global.ucayali = {};
let pythonUcayaliProcess = spawn('python', ['./python/departamentos/ucayali.py']);
pythonUcayaliProcess.stdout.on('data', async (data) => {
    //convert string to Json
    mystr = data.toString();

    //convert string into json
    global.ucayali = JSON.parse(mystr);
    const count = await Ucayali.countDocuments({});
    
    if(count > 100){
      const primer_elemento = await Ucayali.find({}).limit(1);
      await Ucayali.deleteOne({_id: primer_elemento[0]._id});
      const ucayali = await Ucayali.create(global.ucayali);
      console.log(ucayali);
    }else{
      const ucayali = await Ucayali.create(global.ucayali);
      console.log(ucayali);
    } 
})
}, 86400000);



//APIS
app.use('/', require('./routes/AppRoute'));
app.use('/api', require('./routes/GeneralApi'));
app.use('/api', require('./routes/DepartamentoApi'));
app.use('/api', require('./routes/ProvinciaApi'));


//Middleware
app.use(NotFoundMiddleware);
app.use(ErrorMiddleware);


app.listen(port, () => {
  console.log(`Server run on port ${port}`);
})

