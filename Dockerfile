FROM node:18-alpine3.16
WORKDIR /usr/src/app
# Instala dependências
#RUN apk update && apk upgrade && \
    #apk add --no-cache bash git openssh bind-tools tcpdump
COPY ../../package*.json ./
# To handle 'not get uid/gid'
RUN npm config set unsafe-perm true
COPY ../../ .
RUN npm install
RUN npm install -g forever
EXPOSE 80
CMD forever -c "npm start" ./
