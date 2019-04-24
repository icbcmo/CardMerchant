# ReadMe
## code-push deploy
- Staging

  ```shell
  $ ionic cordova prepare ios
  $ code-push release-cordova CardMerchant_ios ios
  ```

- Production

  ```shell
  $ npm run ionic:ios:prepare
  $ npm run ionic:ios:release
  ```

  *replace 'ios' with 'android' to deploy the android version*

  