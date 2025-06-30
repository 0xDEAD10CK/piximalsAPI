import request from 'supertest';
import { expect } from 'chai';
import app from '../index.ts';

describe('E2E: Auth Register', () => {
    const username = `testuser_${Date.now()}`;

    it('should register a new user successfully', async () => {

        const res = await request(app)
        .post('/api/v1/auth/register')
        .send({
            username,
            password: 'TestPassword123!',
            role: 'BASIC_USER',
        });

        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('msg').that.includes('successfully');
        expect(res.body).to.have.nested.property('data.username', username);
        expect(res.body.data).to.not.have.property('password');
    });

    it('should login a user successfully', async () => {

        const res = await request(app)
            .post('/api/v1/auth/login')
            .send({
                username,
                password: 'TestPassword123!'
            })

        expect(res.status).to.equal(200)
        expect(res.body).to.have.property('msg').that.includes('User successfully logged in');
        expect(res.body).to.have.property('token')
    })

    it('login user with the wrong password', async () => {
        
    })
});
