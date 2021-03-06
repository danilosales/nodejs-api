FROM node:16.15-alpine3.14
RUN mkdir -p ~/app
WORKDIR ~/app
RUN adduser -S app
COPY ./ .
RUN npm install
RUN npm install --save pm2
RUN chown -R app ./
USER app
EXPOSE 3000
CMD [ "npm", "run", "pm2" ]
