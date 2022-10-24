FROM node:alpine
COPY . /usr/src/app
WORKDIR /usr/src/app
EXPOSE 3000
USER 5000
CMD ["node", "src/index.js"]