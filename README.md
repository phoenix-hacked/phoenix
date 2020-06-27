# Sahayak App - Team Phoenix
A platform which aims to bridge the gap between Academics and Industries provides various opportunities to students or anyone so that they can be well groomed and competent enough to work in the Professional environment.

Sahayak aims to connect individuals and organizations to provide or receive mentorship which have competitive advantage to all them:
- Student/Knowledge Seeker
- Industry Experts
- Companies
- Universities

## Dependencies
#### 1.  RVM(Ruby Version Manager)
    curl -sSL https://get.rvm.io | bash -s stable --ruby

#### 2. Ruby 2.7.1
    rvm install ruby-2.7.1

#### 3. Postgres DB
    brew install postgres
    brew services start postgresql

## Running locally
### 1. Frontend
```
cd frontend
yarn install
yarn start
```

### 2. Backend Rails API
#### Install Bundler
    gem install bundler

#### Install Ruby libraries(Gems)
    bundle install

#### Install npm dependencies
    npm install

#### Update config/database.yml details if needed
    rake db:setup // one time only

#### Run migration
    rake db:migration

#### Start server
    rails s

#### 3. Run frontend and backend combined
    bin/rake start


## Heroku Setup
### 1. Create New App
From project root:

    heroku apps:create sahayak-np

### 2. Setup environment for NodeJS and Rails app
    heroku buildpacks:add heroku/nodejs --index 1
    heroku buildpacks:add heroku/ruby --index 2

## Heroku Deployment
#### 1. Check if heroku has been added to the origin
```
=❯ git remote -v
heroku	https://git.heroku.com/sahayak-np.git (fetch)
heroku	https://git.heroku.com/sahayak-np.git (push)
origin	git@github.com:phoenix-hacked/phoenix.git (fetch)
origin	git@github.com:phoenix-hacked/phoenix.git (push)
```

#### 2. Commit changes
```
git add .
git commit -m "Commit message."
```

#### 3. Deploy
Changes from master branch:
```
git push heroku master
```
Changes from any branch branch:
```
git push heroku <test-branch-name>:master
```

#### 4. Useful commands
- Tail logs:
    ```
    heroku logs --tail
    ```
- Run any command inside app directory
    ```
    e.g.
    heroku run rails console
    heroku run rake db:seed
    ```
- Open deployed app's link in browser:
    ```
    heroku open
    ```
