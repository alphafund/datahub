"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9507],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2740:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(4137)),i=["components"],s={title:"Debugging Guide",sidebar_label:"Debugging Guide",slug:"/debugging",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/debugging.md"},l="Debugging Guide",c={unversionedId:"docs/debugging",id:"docs/debugging",isDocsHomePage:!1,title:"Debugging Guide",description:"How can I confirm if all Docker containers are running as expected after a quickstart?",source:"@site/genDocs/docs/debugging.md",sourceDirName:"docs",slug:"/debugging",permalink:"/docs/debugging",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/debugging.md",tags:[],version:"current",frontMatter:{title:"Debugging Guide",sidebar_label:"Debugging Guide",slug:"/debugging",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/debugging.md"},sidebar:"overviewSidebar",previous:{title:"CLI",permalink:"/docs/cli"},next:{title:"Intro to Metadata Ingestion",permalink:"/docs/metadata-ingestion"}},d=[{value:"How can I confirm if all Docker containers are running as expected after a quickstart?",id:"how-can-i-confirm-if-all-docker-containers-are-running-as-expected-after-a-quickstart",children:[],level:2},{value:"My elasticsearch or broker container exited with error or was stuck forever",id:"my-elasticsearch-or-broker-container-exited-with-error-or-was-stuck-forever",children:[],level:2},{value:"How can I check if MXE Kafka topics are created?",id:"how-can-i-check-if-mxe-kafka-topics-are-created",children:[],level:2},{value:"How can I check if search indices are created in Elasticsearch?",id:"how-can-i-check-if-search-indices-are-created-in-elasticsearch",children:[],level:2},{value:"How can I check if data has been loaded into MySQL properly?",id:"how-can-i-check-if-data-has-been-loaded-into-mysql-properly",children:[],level:2},{value:"Getting error while starting Docker containers",id:"getting-error-while-starting-docker-containers",children:[{value:"<code>bind: address already in use</code>",id:"bind-address-already-in-use",children:[],level:3},{value:"<code>OCI runtime create failed</code>",id:"oci-runtime-create-failed",children:[],level:3},{value:"<code>failed to register layer: devmapper: Unknown device</code>",id:"failed-to-register-layer-devmapper-unknown-device",children:[],level:3},{value:"<code>ERROR: for kafka-rest-proxy  Get https://registry-1.docker.io/v2/confluentinc/cp-kafka-rest/manifests/5.4.0: EOF</code>",id:"error-for-kafka-rest-proxy--get-httpsregistry-1dockeriov2confluentinccp-kafka-restmanifests540-eof",children:[],level:3}],level:2},{value:"toomanyrequests: too many failed login attempts for username or IP address",id:"toomanyrequests-too-many-failed-login-attempts-for-username-or-ip-address",children:[],level:2},{value:"Seeing <code>Table &#39;datahub.metadata_aspect&#39; doesn&#39;t exist</code> error when logging in",id:"seeing-table-datahubmetadata_aspect-doesnt-exist-error-when-logging-in",children:[],level:2},{value:"I&#39;ve messed up my docker setup. How do I start from scratch?",id:"ive-messed-up-my-docker-setup-how-do-i-start-from-scratch",children:[],level:2},{value:"I&#39;m seeing exceptions in DataHub GMS container like &quot;Caused by: java.lang.IllegalStateException: Duplicate key com.linkedin.metadata.entity.ebean.EbeanAspectV2@dd26e011&quot;. What do I do?",id:"im-seeing-exceptions-in-datahub-gms-container-like-caused-by-javalangillegalstateexception-duplicate-key-comlinkedinmetadataentityebeanebeanaspectv2dd26e011-what-do-i-do",children:[],level:2},{value:"I&#39;ve modified the default user.props file to include a custom username and password, but I don&#39;t see the new user(s) inside the Users &amp; Groups tab. Why not?",id:"ive-modified-the-default-userprops-file-to-include-a-custom-username-and-password-but-i-dont-see-the-new-users-inside-the-users--groups-tab-why-not",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"debugging-guide"},"Debugging Guide"),(0,r.kt)("h2",{id:"how-can-i-confirm-if-all-docker-containers-are-running-as-expected-after-a-quickstart"},"How can I confirm if all Docker containers are running as expected after a quickstart?"),(0,r.kt)("p",null,"If you set up the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," CLI tool (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"here"),"), you can use the built-in check utility:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"datahub docker check\n")),(0,r.kt)("p",null,"You can list all Docker containers in your local by running ",(0,r.kt)("inlineCode",{parentName:"p"},"docker container ls"),". You should expect to see a log similar to the below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE                                                 COMMAND                  CREATED             STATUS              PORTS                                                      NAMES\n979830a342ce        linkedin/datahub-mce-consumer:latest                "bash -c \'while ping\u2026"   10 hours ago        Up 10 hours                                                                    datahub-mce-consumer\n3abfc72e205d        linkedin/datahub-frontend-react:latest              "datahub-frontend\u2026"   10 hours ago        Up 10 hours         0.0.0.0:9002->9002/tcp                                     datahub-frontend\n50b2308a8efd        linkedin/datahub-mae-consumer:latest                "bash -c \'while ping\u2026"   10 hours ago        Up 10 hours                                                                    datahub-mae-consumer\n4d6b03d77113        linkedin/datahub-gms:latest                         "bash -c \'dockerize \u2026"   10 hours ago        Up 10 hours         0.0.0.0:8080->8080/tcp                                     datahub-gms\nc267c287a235        landoop/schema-registry-ui:latest                     "/run.sh"                10 hours ago        Up 10 hours         0.0.0.0:8000->8000/tcp                                     schema-registry-ui\n4b38899cc29a        confluentinc/cp-schema-registry:5.2.1                 "/etc/confluent/dock\u2026"   10 hours ago        Up 10 hours         0.0.0.0:8081->8081/tcp                                     schema-registry\n37c29781a263        confluentinc/cp-kafka:5.2.1                           "/etc/confluent/dock\u2026"   10 hours ago        Up 10 hours         0.0.0.0:9092->9092/tcp, 0.0.0.0:29092->29092/tcp           broker\n15440d99a510        docker.elastic.co/kibana/kibana:5.6.8                 "/bin/bash /usr/loca\u2026"   10 hours ago        Up 10 hours         0.0.0.0:5601->5601/tcp                                     kibana\n943e60f9b4d0        neo4j:4.0.6                                           "/sbin/tini -g -- /d\u2026"   10 hours ago        Up 10 hours         0.0.0.0:7474->7474/tcp, 7473/tcp, 0.0.0.0:7687->7687/tcp   neo4j\n6d79b6f02735        confluentinc/cp-zookeeper:5.2.1                       "/etc/confluent/dock\u2026"   10 hours ago        Up 10 hours         2888/tcp, 0.0.0.0:2181->2181/tcp, 3888/tcp                 zookeeper\n491d9f2b2e9e        docker.elastic.co/elasticsearch/elasticsearch:5.6.8   "/bin/bash bin/es-do\u2026"   10 hours ago        Up 10 hours         0.0.0.0:9200->9200/tcp, 9300/tcp                           elasticsearch\nce14b9758eb3        mysql:5.7\n')),(0,r.kt)("p",null,"Also you can check individual Docker container logs by running ",(0,r.kt)("inlineCode",{parentName:"p"},"docker logs <<container_name>>"),". For ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-gms"),", you should see a log similar to this at the end of the initialization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2020-02-06 09:20:54.870:INFO:oejs.Server:main: Started @18807ms\n")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react"),", you should see a log similar to this at the end of the initialization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"09:20:22 [main] INFO  play.core.server.AkkaHttpServer - Listening for HTTP on /0.0.0.0:9002\n")),(0,r.kt)("h2",{id:"my-elasticsearch-or-broker-container-exited-with-error-or-was-stuck-forever"},"My elasticsearch or broker container exited with error or was stuck forever"),(0,r.kt)("p",null,"If you're seeing errors like below, chances are you didn't give enough resource to docker. Please make sure to allocate at least 8GB of RAM + 2GB swap space."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"datahub-gms             | 2020/04/03 14:34:26 Problem with request: Get http://elasticsearch:9200: dial tcp 172.19.0.5:9200: connect: connection refused. Sleeping 1s\nbroker                  | [2020-04-03 14:34:42,398] INFO Client session timed out, have not heard from server in 6874ms for sessionid 0x10000023fa60002, closing socket connection and attempting reconnect (org.apache.zookeeper.ClientCnxn)\nschema-registry         | [2020-04-03 14:34:48,518] WARN Client session timed out, have not heard from server in 20459ms for sessionid 0x10000023fa60007 (org.apache.zookeeper.ClientCnxn)\n")),(0,r.kt)("h2",{id:"how-can-i-check-if-mxe-kafka-topics-are-created"},"How can I check if ",(0,r.kt)("a",{parentName:"h2",href:"/docs/what/mxe"},"MXE")," Kafka topics are created?"),(0,r.kt)("p",null,"You can use a utility like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/edenhill/kafkacat"},"kafkacat")," to list all topics.\nYou can run below command to see the Kafka topics created in your Kafka broker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kafkacat -L -b localhost:9092\n")),(0,r.kt)("p",null,"Confirm that ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataChangeEvent"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataAuditEvent"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataChangeProposal_v1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MetadataChangeLog_v1")," topics exist besides the default ones."),(0,r.kt)("h2",{id:"how-can-i-check-if-search-indices-are-created-in-elasticsearch"},"How can I check if search indices are created in Elasticsearch?"),(0,r.kt)("p",null,"You can run below command to see the search indices created in your Elasticsearch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:9200/_cat/indices\n")),(0,r.kt)("p",null,"Confirm that ",(0,r.kt)("inlineCode",{parentName:"p"},"datasetindex_v2")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"corpuserindex_v2")," indices exist besides the default ones. Example response as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yellow open dataset_datasetprofileaspect_v1         HnfYZgyvS9uPebEQDjA1jg 1 1   0  0   208b   208b\nyellow open datajobindex_v2                         A561PfNsSFmSg1SiR0Y0qQ 1 1   2  9 34.1kb 34.1kb\nyellow open mlmodelindex_v2                         WRJpdj2zT4ePLSAuEvFlyQ 1 1   1 12 24.2kb 24.2kb\nyellow open dataflowindex_v2                        FusYIc1VQE-5NaF12uS8dA 1 1   1  3 23.3kb 23.3kb\nyellow open mlmodelgroupindex_v2                    QOzAaVx7RJ2ovt-eC0hg1w 1 1   0  0   208b   208b\nyellow open datahubpolicyindex_v2                   luXfXRlSRoS2-S_tvfLjHA 1 1   0  0   208b   208b\nyellow open corpuserindex_v2                        gbNXtnIJTzqh3vHSZS0Fwg 1 1   2  2 18.4kb 18.4kb\nyellow open dataprocessindex_v2                     9fL_4iCNTLyFv8MkDc6nIg 1 1   0  0   208b   208b\nyellow open chartindex_v2                           wYKlG5ylQe2dVKHOaswTww 1 1   2  7 29.4kb 29.4kb\nyellow open tagindex_v2                             GBQSZEvuRy62kpnh2cu1-w 1 1   2  2 19.7kb 19.7kb\nyellow open mlmodeldeploymentindex_v2               UWA2ltxrSDyev7Tmu5OLmQ 1 1   0  0   208b   208b\nyellow open dashboardindex_v2                       lUjGAVkRRbuwz2NOvMWfMg 1 1   1  0  9.4kb  9.4kb\nyellow open .ds-datahub_usage_event-000001          Q6NZEv1UQ4asNHYRywxy3A 1 1  36  0 54.8kb 54.8kb\nyellow open datasetindex_v2                         bWE3mN7IRy2Uj0QzeCt1KQ 1 1   7 47 93.7kb 93.7kb\nyellow open mlfeatureindex_v2                       fvjML5xoQpy8oxPIwltm8A 1 1  20 39 59.3kb 59.3kb\nyellow open dataplatformindex_v2                    GihumZfvRo27vt9yRpoE_w 1 1   0  0   208b   208b\nyellow open glossarynodeindex_v2                    ABKeekWTQ2urPWfGDsS4NQ 1 1   1  1 18.1kb 18.1kb\nyellow open graph_service_v1                        k6q7xV8OTIaRIkCjrzdufA 1 1 116 25 77.1kb 77.1kb\nyellow open system_metadata_service_v1              9-FKAqp7TY2hs3RQuAtVMw 1 1 303  0 55.9kb 55.9kb\nyellow open schemafieldindex_v2                     Mi_lqA-yQnKWSleKEXSWeg 1 1   0  0   208b   208b\nyellow open mlfeaturetableindex_v2                  pk98zrSOQhGr5gPYUQwvvQ 1 1   5 14 36.4kb 36.4kb\nyellow open glossarytermindex_v2                    NIyi3WWiT0SZr8PtECo0xQ 1 1   3  8 23.1kb 23.1kb\nyellow open mlprimarykeyindex_v2                    R1WFxD9sQiapIZcXnDtqMA 1 1   7  6 35.5kb 35.5kb\nyellow open corpgroupindex_v2                       AYxVtFAEQ02BsJdahYYvlA 1 1   2  1 13.3kb 13.3kb\nyellow open dataset_datasetusagestatisticsaspect_v1 WqPpDCKZRLaMIcYAAkS_1Q 1 1   0  0   208b   208b\n")),(0,r.kt)("h2",{id:"how-can-i-check-if-data-has-been-loaded-into-mysql-properly"},"How can I check if data has been loaded into MySQL properly?"),(0,r.kt)("p",null,"Once the mysql container is up and running, you should be able to connect to it directly on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3306")," using tools such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.mysql.com/products/workbench/"},"MySQL Workbench"),". You can also run the following command to invoke ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/mysql.html"},"MySQL Command-Line Client")," inside the mysql container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker exec -it mysql /usr/bin/mysql datahub --user=datahub --password=datahub\n")),(0,r.kt)("p",null,"Inspect the content of ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata_aspect_v2")," table, which contains the ingested aspects for all entities."),(0,r.kt)("h2",{id:"getting-error-while-starting-docker-containers"},"Getting error while starting Docker containers"),(0,r.kt)("p",null,"There can be different reasons why a container fails during initialization. Below are the most common reasons:"),(0,r.kt)("h3",{id:"bind-address-already-in-use"},(0,r.kt)("inlineCode",{parentName:"h3"},"bind: address already in use")),(0,r.kt)("p",null,"This error means that the network port (which is supposed to be used by the failed container) is already in use on your system. You need to find and kill the process which is using this specific port before starting the corresponding Docker container. If you don't want to kill the process which is using that port, another option is to change the port number for the Docker container. You need to find and change the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/#ports"},"ports")," parameter for the specific Docker container in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," configuration file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Example : On macOS\n\nERROR: for mysql  Cannot start service mysql: driver failed programming external connectivity on endpoint mysql (5abc99513affe527299514cea433503c6ead9e2423eeb09f127f87e2045db2ca): Error starting userland proxy: listen tcp 0.0.0.0:3306: bind: address already in use\n\n   1) sudo lsof -i :3306\n   2) kill -15 <PID found in step1>\n")),(0,r.kt)("h3",{id:"oci-runtime-create-failed"},(0,r.kt)("inlineCode",{parentName:"h3"},"OCI runtime create failed")),(0,r.kt)("p",null,"If you see an error message like below, please make sure to git update your local repo to HEAD."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ERROR: for datahub-mae-consumer  Cannot start service datahub-mae-consumer: OCI runtime create failed: container_linux.go:349: starting container process caused "exec: \\"bash\\": executable file not found in $PATH": unknown\n')),(0,r.kt)("h3",{id:"failed-to-register-layer-devmapper-unknown-device"},(0,r.kt)("inlineCode",{parentName:"h3"},"failed to register layer: devmapper: Unknown device")),(0,r.kt)("p",null,"This most means that you're out of disk space (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/issues/1879"},"#1879"),")."),(0,r.kt)("h3",{id:"error-for-kafka-rest-proxy--get-httpsregistry-1dockeriov2confluentinccp-kafka-restmanifests540-eof"},(0,r.kt)("inlineCode",{parentName:"h3"},"ERROR: for kafka-rest-proxy  Get https://registry-1.docker.io/v2/confluentinc/cp-kafka-rest/manifests/5.4.0: EOF")),(0,r.kt)("p",null,"This is most likely a transient issue with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"Docker Registry"),". Retry again later."),(0,r.kt)("h2",{id:"toomanyrequests-too-many-failed-login-attempts-for-username-or-ip-address"},"toomanyrequests: too many failed login attempts for username or IP address"),(0,r.kt)("p",null,"Try the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm ~/.docker/config.json\ndocker login\n")),(0,r.kt)("p",null,"More discussions on the same issue ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/docker/hub-feedback/issues/1250"},"https://github.com/docker/hub-feedback/issues/1250")),(0,r.kt)("h2",{id:"seeing-table-datahubmetadata_aspect-doesnt-exist-error-when-logging-in"},"Seeing ",(0,r.kt)("inlineCode",{parentName:"h2"},"Table 'datahub.metadata_aspect' doesn't exist")," error when logging in"),(0,r.kt)("p",null,"This means the database wasn't properly initialized as part of the quickstart processs (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/issues/1816"},"#1816"),"). Please run the following command to manually initialize it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker exec -i mysql sh -c 'exec mysql datahub -udatahub -pdatahub' < docker/mysql/init.sql\n")),(0,r.kt)("h2",{id:"ive-messed-up-my-docker-setup-how-do-i-start-from-scratch"},"I've messed up my docker setup. How do I start from scratch?"),(0,r.kt)("p",null,"Run the following script to remove all the containers and volumes created during the quickstart tutorial. Note that you'll also lose all the data as a result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./docker/nuke.sh\n")),(0,r.kt)("h2",{id:"im-seeing-exceptions-in-datahub-gms-container-like-caused-by-javalangillegalstateexception-duplicate-key-comlinkedinmetadataentityebeanebeanaspectv2dd26e011-what-do-i-do"},'I\'m seeing exceptions in DataHub GMS container like "Caused by: java.lang.IllegalStateException: Duplicate key com.linkedin.metadata.entity.ebean.EbeanAspectV2@dd26e011". What do I do?'),(0,r.kt)("p",null,"This is related to a SQL column collation issue. The default collation we previously used (prior to Oct 26, 2021) for URN fields was case-insensitive (utf8mb4_unicode_ci). We've recently moved\nto deploying with a case-sensitive collation (utf8mb4_bin) by default. In order to update a deployment that was started before Oct 26, 2021 (v0.8.16 and below) to have the new collation, you must run this command against your SQL DB directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ALTER TABLE metadata_aspect_v2 CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;\n")),(0,r.kt)("h2",{id:"ive-modified-the-default-userprops-file-to-include-a-custom-username-and-password-but-i-dont-see-the-new-users-inside-the-users--groups-tab-why-not"},"I've modified the default user.props file to include a custom username and password, but I don't see the new user(s) inside the Users & Groups tab. Why not?"),(0,r.kt)("p",null,"Currently, ",(0,r.kt)("inlineCode",{parentName:"p"},"user.props")," is a file used by the JAAS PropertyFileLoginModule solely for the purpose of ",(0,r.kt)("strong",{parentName:"p"},"Authentication"),". The file is not used as an source from which to\ningest additional metadata about the user. For that, you'll need to ingest some custom information about your new user using the Rest.li APIs or the ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/source_docs/file"},"File-based ingestion source"),"."),(0,r.kt)("p",null,"For an example of a file that ingests user information, check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/mce_files/single_mce.json"},"single_mce.json"),', which ingests a single user object into DataHub. Notice that the "urn" field provided\nwill need to align with the custom username you\'ve provided in user.props file. For example, if your user.props file contains:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"my-custom-user:my-custom-password\n")),(0,r.kt)("p",null,"You'll need to ingest some metadata of the following form to see it inside the DataHub UI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "auditHeader": null,\n  "proposedSnapshot": {\n    "com.linkedin.pegasus2avro.metadata.snapshot.CorpUserSnapshot": {\n      "urn": "urn:li:corpuser:my-custom-user",\n      "aspects": [\n        {\n          "com.linkedin.pegasus2avro.identity.CorpUserInfo": {\n            "active": true,\n            "displayName": {\n              "string": "The name of the custom user"\n            },\n            "email": "my-custom-user-email@example.io",\n            "title": {\n              "string": "Engineer"\n            },\n            "managerUrn": null,\n            "departmentId": null,\n            "departmentName": null,\n            "firstName": null,\n            "lastName": null,\n            "fullName": {\n              "string": "My Custom User"\n            },\n            "countryCode": null\n          }\n        }\n      ]\n    }\n  },\n  "proposedDelta": null\n}\n')))}p.isMDXComponent=!0}}]);