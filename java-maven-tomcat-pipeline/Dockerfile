FROM ubuntu:24.04

RUN apt-get update && \
    apt-get install -y openjdk-17-jdk wget && \
    rm -rf /var/lib/apt/lists/*

# Set Tomcat version
ENV TOMCAT_VERSION=10.1.59

# Download and install Tomcat
RUN wget https://dlcdn.apache.org/tomcat/tomcat-10/v${TOMCAT_VERSION}/bin/apache-tomcat-${TOMCAT_VERSION}.tar.gz && \
    tar -xzf apache-tomcat-${TOMCAT_VERSION}.tar.gz -C /opt && \
    mv /opt/apache-tomcat-${TOMCAT_VERSION} /opt/tomcat && \
    rm apache-tomcat-${TOMCAT_VERSION}.tar.gz

# Remove default Tomcat application
RUN rm -rf /opt/tomcat/webapps/*

#Copy war file from target to webapps
COPY java-project/DemoApp/target/DemoApp.war /opt/tomcat/webapps/ROOT.war

LABEL Name="Piyush nandankar"
LABEL Email="piyush.nandankar@dolatcapital.com"
LABEL Description="This is ubuntu image.. Install Tomcat to launch java based app with maven"

EXPOSE 8080


CMD ["/opt/tomcat/bin/catalina.sh", "run"]

