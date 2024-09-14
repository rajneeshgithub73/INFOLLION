# GitHub Proxy Server

This is a simple API proxy server built with Node.js and Express.js. It proxies requests to the GitHub API, implements rate limiting, caching, and basic authentication. It also logs each request with customizable logging using `morgan`.

## Features

- **Proxy to GitHub API**: Fetch GitHub user data via a `/api/github/:username` endpoint.
- **Rate Limiting**: Limits each IP to 5 requests per minute to prevent abuse (configurable).
- **Caching**: Caches successful API responses for 5 minutes to reduce external API calls (configurable).
- **Logging**: Logs details such as the timestamp, IP address, method, response time, and rate limit status using a custom format.
- **Authentication**: Secures the proxy endpoint with a simple API key mechanism.
- **Error Handling**: Handles errors from the external API and returns informative error messages.

## Requirements

- Node.js (>=14.x)
- npm (>=6.x)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/rajneeshgithub73/INFOLLION.git
    cd INFOLLION
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project with the following content:

    ```bash
    # .env
    PORT=5000
    CACHE_DURATION=300000
    RATE_LIMIT_WINDOW=60000
    RATE_LIMIT_MAX=5
    API_KEY=mysecretapikey
    ```

4. Start the server:

    ```bash
    node index.js
    ```

## Usage with Postman

You can also test the proxy server using Postman, a popular API testing tool. Follow these steps to make a request:

1. Open Postman and create a new **GET** request.
2. Set the request URL to:
   ```text
   http://localhost:5000/api/github/rajneeshgithub73
   ```
3. Add the following header to authenticate the request:
   ```text
   - Key: apikey
   - Value: mysecretapikey
   ```
