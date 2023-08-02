# MODM v2 - Jenkins experimental

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

using: https://github.com/alfonsof/terraform-azure-examples/tree/master/code/06-create-blob-storage 

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
