#!/bin/bash

export JENKINS_CONTAINER_ID=$(docker run -d -p 8080:8080 -p 50000:50000 --restart=on-failure \
    -v jenkins_home:/var/jenkins_home \
    -v "${HOME}/.azure:/root/.azure" \
    -v "./deployments/definitions:/var/jenkins_home/definitions" \
    modmjenkins)

echo "Jenkins container ID: $JENKINS_CONTAINER_ID"
echo "Admin password: $(docker exec $JENKINS_CONTAINER_ID cat /var/jenkins_home/secrets/initialAdminPassword)"