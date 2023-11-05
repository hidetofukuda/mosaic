
ARG VARIANT=18-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:${VARIANT}

ARG USERNAME

RUN apt-get update \
   && export DEBIAN_FRONTEND=noninteractive \
   && groupadd $USERNAME \
   && useradd -d /home/$USERNAME -s /bin/bash -g $USERNAME $USERNAME \
   && mkdir -m 777 /workspaces \
   && apt-get clean \
   && rm -rf /var/lib/apt/lists/*

WORKDIR /workspaces

RUN npm install