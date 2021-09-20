const request = require('supertest')
const server = require('../../src/server')

const cities = require('../../utils/states.json')

describe('GET Endpoints', () => {
    afterEach(async() => await server.close())

    it('Should get all the México states', async(done) => {
        const response = await request(server).get('/state/getAll')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(cities)
        done()
    })
    it('Should get a city by name', async(done) => {
        const cityName = "Coahuila"
        const response = await request(server).get(`/state/getByName/${cityName}`)
        expect(response.status).toBe(200)
        expect(response.body).toEqual(cities.find(c => { return c.name === cityName }))
        done()
    })
})

describe('POST Endpoint', () => {
    afterEach(async() => await server.close())

    it('Should create a new México state', async(done) => {
        const body = {
            "id": "1",
            "state_id": "40",
            "key": "040",
            "name": "Nueva Laguna",
            "initials": ""
        }
        const response = await request(server).post('/state/create').send(body)
        expect(response.status).toBe(201)
        expect(response.text).toEqual("Created " + JSON.stringify(body))
        done()
    })
})

describe('PUT Endpoint', () => {

    it('Should update a México state', async(done) => {
        const body = {
            "id": "2491",
            "state_id": "32",
            "key": "056",
            "name": "Nuevo Zacatecas",
            "initials": ""
        }
        const response = await request(server).put('/state/update').send(body)
        expect(response.status).toBe(200)
        expect(response.text).toEqual("Updated " + JSON.stringify(body))
        done()
    })
})

describe('PATCH Endpoint', () => {
    afterEach(async() => await server.close())

    it('Should update a México state', async(done) => {
        const body = {
            "name": "Nuevo Zacatecas"
        }
        const response = await request(server).patch('/state/patch').send(body)
        expect(response.status).toBe(200)
        expect(response.text).toEqual("Patched " + JSON.stringify(body))
        done()
    })
})

describe('DELETE Endpoint', () => {
    afterEach(async() => await server.close())

    it('Should delete a México state', async(done) => {
        const cityName = "Tepezalá"
        const response = await request(server).delete(`/state/delete/${cityName}`)
        expect(response.status).toBe(200)
        expect(response.text).toEqual("Deleted " + cityName)
        done()
    })
})