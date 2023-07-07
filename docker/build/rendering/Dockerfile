# escape=`

ARG PARENT_IMAGE
FROM ${PARENT_IMAGE} as debug

WORKDIR /app

COPY ./src/easybank/package*.json ./
RUN echo "Copied package.json files"

RUN npm install

COPY ./src/easybank/ .
RUN echo "Copied application files"

EXPOSE 3000