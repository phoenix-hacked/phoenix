build:
	yarn --cwd frontend build .env.production.local, .env.production, .env.local, .env
	bundle install

run:
	heroku local -f Procfile.dev

run-client:
	yarn --cwd frontend start .env

run-server:
	rails s -p 4000
