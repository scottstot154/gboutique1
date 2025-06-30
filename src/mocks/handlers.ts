import { http, HttpResponse } from 'msw';
import mockCollections from './collectionItems.json';

export const handlers = [
  http.get('/api/collectionItems', ({ request, params }) => {
    return HttpResponse.json(mockCollections);
  }),

  http.get('/api/collections/:name', ({ params }) => {
    const name = params.name as string;
    const data = require(`./collections/${name}.json`);
    if (data) {
      return HttpResponse.json(data);
    } else {
      return new HttpResponse(
        JSON.stringify({ error: 'Collection not found' }),
        { status: 404 }
      );
    }
  }),
];
