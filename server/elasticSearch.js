const { Client } = require('@elastic/elasticsearch')

async function run () {
  const client = new Client({ node: 'http://localhost:9200' })

  // Let's start by indexing some data
  await client.index({
    index: 'game-of-thrones',
    body: {
      character: 'Jon Snow',
      quote: 'Winter is coming.'
    }
  })

  // Let's search for the document we just indexed
  const { body } = await client.search({
    index: 'game-of-thrones',
    body: {
      query: {
        match: { character: 'Jon Snow' }
      }
    }
  })

  console.log(body.hits.hits)
}

module.exports = run;

run().catch(console.log)
