FROM jenkins/jenkins:lts-jdk11
USER root

# prerequisites
RUN apt-get clean && apt-get update
RUN apt install curl -y
RUN apt install -y --no-install-recommends gnupg ca-certificates apt-transport-https

# install azure CLI
RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash

# install terraform
RUN apt-get update && apt-get install -y gnupg software-properties-common
RUN curl -fsSL https://apt.releases.hashicorp.com/gpg | apt-key add -
RUN apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"

RUN apt-get update
RUN apt-get install terraform

# plugins
USER jenkins

ENV DEFAULT_PLUGINS="command-launcher credentials-binding@604.vb_64480b_c56ca_ workflow-api pipeline-build-step workflow-cps workflow-support gradle cloudbees-folder build-timeout git git-client"
ENV MODM_PLUGINS="azure-cli azure-credentials@254.v64da_8176c83a azure-ad terraform"

RUN jenkins-plugin-cli --plugins $DEFAULT_PLUGINS
RUN jenkins-plugin-cli --plugins $MODM_PLUGINS
