#!/bin/bash

function jenkins_build() {
    . ./scripts/build.sh
}

function jenkins_run() {
    . ./scripts/run.sh
}

function jenkins_start() {
    jenkins_build
    jenkins_run
}

function jenkins_stop() {
    docker stop $JENKINS_CONTAINER_ID
    docker container rm $JENKINS_CONTAINER_ID
}
