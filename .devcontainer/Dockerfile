
ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:${VARIANT}

# 開発用ユーザー
RUN useradd -m -d /home/dev-user -s /bin/bash -p dev-user dev-user

WORKDIR /workspaces

RUN npm install typescript