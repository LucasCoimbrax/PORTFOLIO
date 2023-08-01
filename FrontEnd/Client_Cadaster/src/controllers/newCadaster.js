const cadaster = require('../model/cadaster');

module.exports = {
    async formularioPage(req, res){

        const typeCall = req.params.params

        res.render('../views/formularioPage', { typeCall });
    },

    async newCadaster(req, res){
        const  dados = req.body;

        try{
            if (!dados.cliente || !dados.descricao || !dados.typeCall) {
                throw new Error ("401 - Bad Request, Forms Invalid!")
            }

        const newCadaster = await cadaster.create({
            Cliente: dados.cliente,
            Descricao: dados.descricao,
            TypeCall: dados.typeCall,
        });

        res.redirect(`/`);
        } catch (error) {
            res.redirect('/')
        }
    }
}