# Node Express Micro-service with Okta Authentication

This microservice is created in Node and Express that uses Okta for authentication. The application was bootstrapped with [Express Generator](https://expressjs.com/en/starter/generator.html).

## Getting Started

To install this micro-service application, run the following commands:

```bash
git clone https://github.com/maddy65/BayerHealthCare.git
cd BayerHealthCare
```

This will get a copy of the project install locally. You will need to set up some environment variables before the app will run properly.

To integrate Okta's Identity Platform for user authentication, you'll first need to:
(Assuming you already have okta app setup)
Create a file called `.env` in the project root and add the following variables, replacing the values with your own from the previous steps.
When developed with localhost, my account details were used to test the okta authn and authr
```bash
HOST_URL=http://localhost:3000
ORG_URL=https://dev-05557705.okta.com
CLIENT_ID=okta-client-id
CLIENT_SECRET=okta-client-secret
REGISTRATION_TOKEN=okta-registration-token
USER_PROFILE_TOKEN=okta-user-profile-token
APP_SECRET=1w2QYH41/IfnSH/xEghjkcNK4++SFzAo0ieK/+cI5CJ=
```
Now run the application:

```bash
npm install
npm start
```

If you want to run the application in development mode so that any changes you make automatically restart the web server, instead of `npm start` use the command `npm run dev`.
