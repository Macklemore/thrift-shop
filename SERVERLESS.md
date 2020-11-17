# Deployment Instructions for Serverless Server

> Make sure you have node 10.x and npm installed

-   Clone repo to your machine

-   Make sure you have the aws credentials set at `~/.aws/credentials` (MAcOS and Linux)

-   Install `serverless` globally via `npm`

```bash
npm install -g serverless
```

-   Navigate to root directory of repo and install dependencies

```bash
# if using yarn
yarn

#if using npm
npm install
```

-   Run the deploy command

```bash
# if aws the credentials are under default profile
sls deploy

# if aws credentials are under some other profile
sls deploy --aws-profile some-other-profile
```
