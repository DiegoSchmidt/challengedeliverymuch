docker stop challangedeliverymuch
docker rm challangedeliverymuch

docker build -t challangedeliverymuch .
docker run -p $(grep APP_portListener .env | cut -d '=' -f 2-):$(grep APP_portListener .env | cut -d '=' -f 2-) --name challangedeliverymuch -d challangedeliverymuch

echo
echo Pressione qualquer tecla para parar a execução do container
read -r -N 1   

echo
echo Parando a execução...
docker stop challangedeliverymuch