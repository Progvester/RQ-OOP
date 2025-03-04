# Project Setup

## Development Mode

### 1. Install Dependencies

Run the following command in both the `client` and `server` directories:

```sh
npm install
```

### 2. Start the Server

Navigate to the `server` directory and run:

```sh
npm run dev
```

This will start the Node.js Express server with `nodemon` for hot-reloading.

### 3. Start the Client

Navigate to the `client` directory and run:

```sh
npx live-server client
```

This will start a development server using `live-server`.

---

## Production Mode

### 1. Install Dependencies

Ensure dependencies are installed by running in the `server` directory:

```sh
npm install --production
```

(This installs only production dependencies, excluding devDependencies.)

### 2. Start the Server

Run the following command in the `server` directory:

```sh
npm start
```

This will start the Express server in production mode.

### 3. Serve the Client

In production, you need to serve static files. You can use the Express server to serve the `client` files by placing them inside a `public` folder and modifying your `index.js` file to include:

```js
app.use(express.static('client'));
```

Alternatively, you can manually deploy the client files to a web server.
