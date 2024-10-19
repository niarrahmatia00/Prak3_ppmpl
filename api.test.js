// test/api.test.js
import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js';

describe('Math API Testing', () => {
    it('POST /add harus mengembalikan hasil penjumlahan yang benar', async () => {
        const numbers = { num1: 10, num2: 5 };

        const response = await request(app).post('/add').send(numbers);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('result', 15);
    });

    it('POST /subtract harus mengembalikan hasil pengurangan yang benar', async () => {
        const numbers = { num1: 10, num2: 5 };

        const response = await request(app).post('/subtract').send(numbers);
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('result', 5);
    });
});
