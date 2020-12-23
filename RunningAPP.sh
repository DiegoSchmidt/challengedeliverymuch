docker rm challangedeliverymuch

docker build -t challangedeliverymuch .
docker run -p 3000:3000 --name challangedeliverymuch -d challangedeliverymuch
