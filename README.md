# MODM v2 - Jenkins experimental

## Overview

**packages** - represents the Deployment Package

**scripts/run.sh** - location where the docker container is started for Jenkins and where the volumes are mounted.

    Volumes
    - jenkins_home
    - jenkins/scripts
    - packages --> jenkins_home/packages


## Setup

setup the source functions to call in the terminal.

```
source ./scripts/source.sh
```

Functions available:

- `jenkins_build`
- `jenkins_run`
- `jenkins_start` - calls build and run
- `jenkins_stop` - stops the running container of Jenkins using `JENKINS_CONTAINER_ID`


# Notes


## Test Terraform template

using: https://github.com/alfonsof/terraform-azure-examples/

## Credentials

Using the Azure AD plugin, the credentials were added to the global store in order to be available to the job. The
job was configured with an Azure Service Principal, binding it to the respective environment variables.

## Docker

Dockerfile installs all the required tooling in order to run 
- Azure CLI
- Terraform



## Parking Lot

- Jenkins agent using separate docker container for isolation from master node
- default username/password
