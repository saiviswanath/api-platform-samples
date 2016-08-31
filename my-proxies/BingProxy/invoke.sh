#!/bin/bash
source ../../setup/setenv.sh

echo -e "\nCalling the BingProxy target"
echo -e "\nCalling: curl http://$org-$env.$api_domain/bingproxy

curl http://$org-$env.$api_domain/bingproxy

echo -e "\nCalling the trucks target"
echo -e "\nCalling: curl http://$org-$env.$api_domain/bingproxy/trucks/truck1

curl http://$org-$env.$api_domain/bingproxy/trucks/truck1

