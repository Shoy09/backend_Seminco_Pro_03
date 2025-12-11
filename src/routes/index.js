const express = require('express');
const router = express.Router();


const usuariosRoutes = require('../routes/api/UsuarioRoutes');
const authRoutes = require('../routes/api/authRoutes');
const empresaRoutes = require('../routes/api/empresaRoutes');
const equipoRoutes = require('../routes/api/equipoRoutes');
const turnoRoutes = require('../routes/api/turnoRoutes');
const estadoRoutes = require('../routes/api/estadoRoutes');
const PlamMensual = require('../routes/api/planMensualRoutes');
const TipoPerfpo = require('../routes/api/tipoPerforacionRoutes');
const PlanMetraje = require('../routes/api/planMetrajeRoutes');
const PlanProduccion = require('../routes/api/planProduccionRoutes');
const Explosivo = require('../routes/api/explosivoRoutes');
const Accesorio = require('../routes/api/accesorioRoutes');
const ExploUni = require('../routes/api/explisivosUniRouter');
const fechasplanmensual = require('../routes/api/fechasPlanMensualroutes');

const toneladas = require('../routes/api/toneladasRoutes');

const semanas = require('../routes/api/semanasRoutes');
const JefeGuardiaAcero = require('../routes/api/jefeGuardiaAceroRoutes');
const auxiliaresMixerRoutes = require('../routes/api/auxiliaresMixer');
const auxiliaresLanzadorRoutes = require('../routes/api/auxiliaresLanzador');
const origenDestinoRoutes = require('../routes/api/origenDestinoRoutes');


router.use('/usuarios', usuariosRoutes);  
router.use('/auth', authRoutes);  
router.use('/Empresa', empresaRoutes);  
router.use('/Equipo', equipoRoutes);  
router.use('/Turno', turnoRoutes);  
router.use('/estado', estadoRoutes);  
router.use('/PlamMensual', PlamMensual);  
router.use('/TipoPerfpo', TipoPerfpo);  
router.use('/PlanMetraje', PlanMetraje);  
router.use('/PlanProduccion', PlanProduccion); 
router.use('/Explosivos', Explosivo);  
router.use('/Accesorios', Accesorio); 
router.use('/Explo-uni', ExploUni); 
router.use('/fechas-plan-mensual', fechasplanmensual); 
router.use('/toneladas', toneladas); 
router.use('/semana-personali', semanas); 
router.use('/jefe-guardia-acero', JefeGuardiaAcero); 
router.use('/auxiliares-mixer', auxiliaresMixerRoutes); 
router.use('/auxiliares-lanzador', auxiliaresLanzadorRoutes); 
router.use('/origen-destino', origenDestinoRoutes); 

module.exports = router;
