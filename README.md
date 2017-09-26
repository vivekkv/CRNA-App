# CRNA-App
React native application


# Publishing App (reference: - https://facebook.github.io/react-native/docs/signed-apk-android.html)
 
   1) npm run eject 
   2) npm i
   3) Generate private key using keytool (inside Java/bin)
   4) Copy Private key to android 
   5) Add sign Config in android/app/build.gradle
   6) run gradlew assembleRelease