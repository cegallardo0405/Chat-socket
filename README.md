# WayChat
Welcome to WayChat! This is a simple chat application that allows users to chat with each other in real-time. If you run this applicacion at home everyone in your network can access it and chat with each other

## Table of content
- [Installation](#installation)
  - [Env file](#env-file)
- [Usage](#usage)
  - [How to find your local IP](#how-to-find-your-local-ip)
- [Developed by](#developed-by)

## Installation
The installation process is pretty straightforward. You just need to clone this repository - via ssh or download the repo - and run the following command in the root directory of the project:
```bash
npm install && cd frontend && npm install && cd ..
```
This will install all the dependencies for the backend and frontend.

### Env file
You need to create a `.env` file in the root directory of the project. In the `.env` file you'll need to add certain variables in order to make the application work. Here is an example of the `.env` file:
```env
NODE_ENV=development
HOST=127.0.0.1
PORT=3000
ORIGINS=*
API_KEY=your-api-key
```
Let's break down the variables:
- `NODE_ENV`: This variable is used to determine the environment in which the application is running. It can be either `development` or `production`. If you set it to `development` the application will run in development mode and it will print logs to the console.

- `HOST`: This variable is used to determine the host on which the server will run. Due to the fact that this `.env` file is used in the backend, leave this variable as it is.

- `PORT`: This variable is used to determine the port on which the server will run. You can change this variable to any port you want, but then you need to change the port in the `frontend/vite.config.js` file as well. If you want the app to work withoth so much hassle, leave this variable as it is.

- `ORIGINS`: This variable is used to determine the origins that are allowed to access the server. If you want to allow all origins to access the server, set this variable to `*`. For this case, `*` it's okay

- `API_KEY`: The key is from the API [Randommer](https://randommer.io/randommer-api). We use this API to generate random names for the users. You can get a free API key from their website. After you get it, just put it in the `.env` file.

## Usage
To run the application you just need to run the following command in the console:
```bash
npm start
```
This will start the whole application. After that, you can access the application by going to `http://localhost:5173` in your browser. If you want to chat with other people in your network, they can access the application by going to `http://your-pc-ip:5173` in their browser

### How to find your IP
You can find your pc IP by running the following command in the console

**Linux**
```bash
hostname -I
```
or
```bash
ifconfig
```
And looking for the `inet` address

**Windows**
```cmd
ipconfig
```
And looking for the `IPv4 Address`

## Developed by
- Juan Andrés Povea
- Zharick Oviedo
- Juan David Tirado
- Carlos Elías López
