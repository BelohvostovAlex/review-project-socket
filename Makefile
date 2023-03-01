build-dev: 
	docker build -t socket -f Dockerfile.dev

build-production:
	docker build -t socket-production -f Dockerfile.production