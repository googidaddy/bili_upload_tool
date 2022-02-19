# ARM architecture
# FROM flyingjoe/uvicorn-gunicorn-fastapi:latest
FROM tiangolo/uvicorn-gunicorn:python3.9

COPY ./main /app
WORKDIR /app
RUN apt-get update -y &&\
    apt-get install -y ca-certificates &&\
    apt-get install -y vim &&\
    apt-get install -y ffmpeg &&\
    pip install --no-cache-dir fastapi &&\
    pip install -r /app/requirements.txt

CMD ["uvicorn", "--port", "20123", "--host", "0.0.0.0", "--reload", "main:app"]


