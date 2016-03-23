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


http://ionicframework.com/docs/guide/publishing.html
#http://shallowsky.com/blog/programming/cordova-create-signed-app.html


S:/sportudo/componentes/branchio/kykelyn1/platforms/android/build/outputs/apk/



jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore kykelyn1.keystore android-release-unsigned.apk kykelyn1


#zipalign 
 C:\Users\sebastianc\AppData\Local\Android\android-sdk\build-tools\20.0.0



 zipalign -v 4 S:\sportudo\componentes\branchio\kykelyn1\platforms\android\build\outputs\apk\android-release-unsigned.apk S:\sportudo\componentes\branchio\kykelyn1\platforms\android\build\outputs\apk\kykelyn1.apk



 ##
 https://www.webniraj.com/2016/03/03/cordova-release-signing-android-applications/

 ##release crosswalk 
 https://baxeico.wordpress.com/2015/05/20/how-to-automatically-sign-your-android-apk-using-ionic-framework-and-crosswalk/

 ##play store

<<<<<<< HEAD
 https://play.google.com/apps/publish/?dev_acc=09337084565237559139#AppListPlace


 ## CUANDO LO HAGO CON EL FIRMADO ESTA FUNCIONANDO OK


 ##cuando le hago ionic run android tambien esta funcionando

 ##CON EL DEBUG ANDROID-DEBUG.APK TAMBIEN ESTA FUNCIONANDO
 entonces no entiendo para k sirve el fingerprint,
 o sera que siempre lo esta usando para firmar todo el que metimos 


# sera por que ya tengo una aplicacion en play store firmada con ese .keystore
=======
 https://play.google.com/apps/publish/?dev_acc=09337084565237559139#AppListPlace
>>>>>>> origin/master
