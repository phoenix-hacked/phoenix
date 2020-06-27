# phoenix

### Install RVM(Ruby Version Manager)
`\curl -sSL https://get.rvm.io | bash -s stable --ruby`

#### Install Ruby 2.7.1 using RVM
    - rvm install ruby-2.7.1

#### Install bundler if not available
    - gem install bundler

#### Install gem dependencies
    - bundle install

#### Install npm dependencies
    - npm install

#### Create the postgres databases
    - brew install postgres
    - brew services start postgresql

#### Update config/database.yml details if needed
    - rake db:setup [one time only]

#### Run migration
    - rake db:migration

#### Start server
    - rails s
