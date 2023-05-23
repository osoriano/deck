#!/bin/bash
set -o errexit
set -o nounset
set -o pipefail


cd "$(dirname "$0")"
cd ..


REPO_NAME="$(basename "${PWD}")"
BUILD_IMAGE_NAME=ubuntu:18.04
BUILD_TAG="$(git branch --show-current)"
BUILD_MEMORY=4g


docker \
  run \
  --interactive \
  --tty \
  --user root \
  --rm \
  --volume "/var/run/docker.sock:/var/run/docker.sock" \
  --volume "${PWD}:/repo" \
  --workdir /repo \
  --env npm_config_cache=/repo/.npm \
  --env GRADLE_USER_HOME=/repo/.gradle \
  --env "GRADLE_OPTS=-Xmx${BUILD_MEMORY}" \
  --env GITHUB_ACTIONS=true \
  --env CHROME_BIN=/usr/bin/chromium-browser \
  "${BUILD_IMAGE_NAME}" \
  bash -c "
    set -euo pipefail
    set -x

    # Install build dependencies
    apt-get -y update
    apt-get -y install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb wget software-properties-common
    apt-get -y install chromium-browser git

    # Install java 11 corretto
    wget -O- https://apt.corretto.aws/corretto.key | apt-key add -
    add-apt-repository 'deb https://apt.corretto.aws stable main'
    apt-get update
    apt-get -y install java-11-amazon-corretto-jdk

    # Configure git
    git config --global --add safe.directory /repo

    # Build
    ./gradlew --no-daemon check build

    # Restore file permissions
    chown --recursive '$(id --user):$(id --group)' .
  "


# Clean old image
IMAGE_NAME="${USER}/${REPO_NAME}:${BUILD_TAG}"
docker rmi -f "${IMAGE_NAME}"

# Build application image
DOCKERFILE=Dockerfile.slim
docker build -t ${IMAGE_NAME} -f "${DOCKERFILE}" .
