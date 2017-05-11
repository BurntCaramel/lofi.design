FROM node:7.9.0-alpine

ENV PATH /root/.yarn/bin:$PATH

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh


RUN apk update \
  && apk add curl bash binutils tar gnupg \
  && rm -rf /var/cache/apk/* \
  && /bin/bash \
  && touch ~/.bashrc \
  && curl -o- -L https://yarnpkg.com/install.sh | bash \
  && apk del curl tar binutils

WORKDIR /app
COPY . .
RUN yarn install
RUN ./node_modules/.bin/next build

EXPOSE 3000

CMD ./node_modules/.bin/next start