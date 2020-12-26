require("dotenv").config()

const request = require('request');
const expect  = require('chai').expect;


describe('Receitas', () => {
    it('Buscar receitas com mais de 3 ingredientes', (done) => {
        request(`http://localhost:${process.env.APP_portListener}/recipes?i=onion,tomato,cheese,bacon`, (error, response, body)=>{

            expect(response.statusCode).to.equal(400);      
            const retorno = JSON.parse(body);
            expect(retorno.status).to.equal(400);
            done();

        })

    });
    it('Buscar receitas sem informar parametros', (done) => {
        request(`http://localhost:${process.env.APP_portListener}/recipes/?i=`, (error, response, body)=>{

            expect(response.statusCode).to.equal(400);      
            const retorno = JSON.parse(body);
            expect(retorno.status).to.equal(400);
            done();

        })

    });
    it('Buscar receitas', (done) => {
        request(`http://localhost:${process.env.APP_portListener}/recipes/?i=onion,tomato,cheese`, (error, response, body)=>{

            expect(response.statusCode).to.equal(200);      
            const retorno = JSON.parse(body);            
            expect(retorno.recipes).to.not.empty;
            done();

        })

    });
    
  });