import request from 'supertest';
import server from '../../server';



describe('POST /api/news', () => {
    
  it('should create a new news', async () => {
    const response = await request(server).post('/api/news').send({
      title: 'titulo testing',
      body: 'body testing',
      author: 'Gonzalo Moreno',
      image_url: '-',
      date: '-',
    })

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('data');

    expect(response.status).not.toBe(200);
    expect(response.status).not.toBe(404);
    expect(response.body).not.toHaveProperty('errors');
  });

});
