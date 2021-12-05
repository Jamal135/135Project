FROM python:3.8-slim-buster

COPY . /srv/flask_app
WORKDIR /srv/flask_app

RUN apt-get clean \
    && apt-get -y update

RUN apt-get -y install nginx \
    && apt-get -y install python3-dev \
    && apt-get -y install build-essential \
    && apt -y install npm

RUN pip install -r requirements.txt --src /usr/local/src
RUN pip install -Iv uWSGI==2.0.17.1 --src /usr/local/src

RUN npm i

EXPOSE 80

COPY nginx.conf /etc/nginx
RUN npx tsc
RUN chmod +x ./start.sh
CMD ["./start.sh"]
