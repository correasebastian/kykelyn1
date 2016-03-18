#package

ionic package build android --release --profile scmprofile


PACKAGES

ionic package download 1 -d ./packages/

generate key

keytool -genkey -v -keystore scmdevkey.keystore -alias scmdevkey  -keyalg RSA -keysize 2048 -validity 10000

 ionic security profiles list


#sha256 finger
https://dev.branch.io/getting-started/universal-app-links/guide/cordova/

keytool -list -v -keystore my-release-key.keystore

#IMPORTANTE 
DESDE QUE ESTO USA EL FINGERPRINT DEBO CONSTUIR EL APK USANDO IONIC PACKAGE PARA QUE USE ESA MISMA CLAVE
