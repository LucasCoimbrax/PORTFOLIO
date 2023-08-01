const cadaster = require('../model/cadaster')

module.exports = {
    async homePage(req, res){
        try{
            const chamadosData = await cadaster.findAll({
                raw: true,
                attributes: [
                    "Nome",
                    "Descricao",
                    "TypeCall"
                ]
            })

            res.render('../views/home.ejs', { chamadosData });
        } catch (error) {
            res.render('../views/home.ejs', { chamadosData: "" });
        }
    },

    async deleteCall(req, res){

        await cadaster.destroy({ 
        })
        
        res.render('../views/Home.ejs')
    }
}