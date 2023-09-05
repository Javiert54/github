// res.send( { data: "Esto viene de Rutas" } )
const model = require('../models/user')
exports.getData = (req,res)=>{
	model.find({}, (err, docs)=>{
		
		res.send({
			docs:docs
		})

	})

}