
If you are using ElasticSearch with Docker, you can start it using the Docker command:

```bash
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.5.0
```

Bootup ElasticSearch script
```bash
node elasticSearch.js
```

