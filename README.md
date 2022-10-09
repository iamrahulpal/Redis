
# Redis

Redis is an in-memory data structure store, used as a distributed, in-memory key–value database, cache and message broker, with optional durability.

I have used redis in this project to test the time reduction.
On first request it takes time normal manner but after using redis response time increases significantly.

## API Reference

#### Get all weather information

```http
  GET /data
```





## Screenshots

### Normal data request

![Normal](https://raw.githubusercontent.com/thisisrahulpal/redis/main/screenshots/Without%20Redis.png)

### After using redis

![After Redis](https://raw.githubusercontent.com/thisisrahulpal/redis/main/screenshots/with%20Redis.png)