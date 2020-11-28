# Api (Monolith-as-a-Service)

## Deployment Instructions

> Based on [this tutorial](https://aws.amazon.com/getting-started/hands-on/break-monolith-app-microservices-ecs-docker-ec2/)

-   Create ECR Repo called `api` ([link](https://aws.amazon.com/getting-started/hands-on/break-monolith-app-microservices-ecs-docker-ec2/module-one/) - Step 3)

-   Note ECR repo URL, something like `<account ID>.dkr.ecr.us-east-1.amazonaws.com/<repo name>`

-   Build and push docker image to ECR repo

```bash
# Set docker registry to use ECR
$ aws ecr get-login-password --region us-east-1 --profile <aws educate profile name> | sudo docker login --username AWS --password-stdin <account ID>.dkr.ecr.us-east-1.amazonaws.com

# Build image
$ cd api
$ sudo docker build -t api .

# Tag docker image
$ sudo docker tag api:latest <repo url>:v1

# Push docker image
$ sudo docker push <repo url>:v1
```

-   Create CloudFormation stack (Might take 5-7 minutes)

```bash
aws cloudformation deploy \
  --template-file api/ecs.yml \
  --region us-east-1 \
  --stack-name monolith \
  --capabilities CAPABILITY_NAMED_IAM \
  --profile <aws educate profile name>
```

-   Create task definition ([link](https://aws.amazon.com/getting-started/hands-on/break-monolith-app-microservices-ecs-docker-ec2/module-two/) - Step 3)

-   Configure load balancer ([link](https://aws.amazon.com/getting-started/hands-on/break-monolith-app-microservices-ecs-docker-ec2/module-two/) - Step 4 and Step 5)

-   Deploy and test ([link](https://aws.amazon.com/getting-started/hands-on/break-monolith-app-microservices-ecs-docker-ec2/module-two/) - Step 6 and Step 7)
