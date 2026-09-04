pipeline {
    agent any
    stages() {
        stage("git pull"){
            steps{
                git branch: "main", url: "https://github.com/piyushnandu1996/DEVOPS-PIPELINE-PROJECTS.git"
            }
        }
        
        stage("Installing packages"){
            steps{
                sh '''
                    if ! command -v node 2>/dev/null ;
                    then
                        sudo apt install -y nodejs npm
                        sudo npm install pm2 -g
                    fi
                    '''
            }
        }
        
        stage("Building project with npm"){
            steps{
                dir('javascript-build-with-nodejs/project/DEMO/backend'){
                    sh ''' 
                        sudo rm -rf node_modules package-lock.json
                        sudo npm install
                         sudo pm2 stop server.js
                        '''
                }
            }
        }
        
        stage('starting backend'){
            steps{
                dir('javascript-build-with-nodejs/project/DEMO/backend'){
                sh 'sudo pm2 start server.js'
                }
            }
        }
        
        
    }
}
