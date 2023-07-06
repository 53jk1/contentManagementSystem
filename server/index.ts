import express from 'express';
import bodyParser from 'body-parser';
import { Client } from '@elastic/elasticsearch';
import { resolveTypeReferenceDirective } from 'typescript';

resolveTypeReferenceDirective

const app = express();
app.use(bodyParser.json());

const client = new Client({ node: 'http://0.0.0.0:9200' });

app.get('/search', async (req, res) => {
  const { q } = req.query;

  const { body } = await client.search({
    index: 'articles',
    body: {
      query: {
        match: {
          content: q
        }
      }
    }
  });

  res.send(body.hits.hits);
});

app.listen(3000, () => console.log('Server listening on port 3000'));

