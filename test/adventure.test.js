import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { describe, it } from "mocha";

import app from "../index.js";

chai.use(chaiHttp);

let authToken = "";

describe('Adventure Routes', () => {
    describe('POST /api/v1/auth/register', () => {
        it('should register user', (done) => {
            chai
                .request(app)
                .post('/api/v1/auth/register')
                .send({ username: 'test', password: 'test' })
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    done();
                });
            });
        })

    describe('POST /api/v1/auth/login', () => {
        it('should login user', (done) => {
            chai
                .request(app)
                .post('/api/v1/auth/login')
                .send({ username: 'test', password: 'test' })
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    authToken = res.body.token;
                    done();
                });
            });
        })

    // describe('POST /api/v1/adventure/zone', () => {
    //     it('should return a message', () => {
    //         // Await the result of the HTTP request
    //         chai
    //           .request(app)
    //           .post('/api/v1/adventure/zone')
    //           .send({ type: 'Nature', monsterAmount: 3 })
    //           .end((err, res) => {
    //             console.log(res.body);
    //             expect(res.status).to.equal(200);
    //             // expect(res.body).to.be.an('object');
    //             // expect(res.body.msg).to.equal('Welcome to the Dangerzone');
    //             done();  
    //           });
    //         });
    // });

    // describe('PUT /api/v1/adventure/zone/:zoneid', () => {
    //     it('should return a message', async () => {
    //         const res = await chai.request(app).put('/api/v1/adventure/zone/1');
    //         expect(res.status).to.equal(200);
    //         expect(res.body).to.be.an('object');
    //         expect(res.body.msg).to.equal('Welcome to the Dangerzone');
    //     });
    // });
});