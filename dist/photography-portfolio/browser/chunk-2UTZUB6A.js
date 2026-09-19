// src/app/core/constants/app.constants.ts
var UserType;
(function(UserType2) {
  UserType2["CLIENT"] = "CLIENT";
  UserType2["USER"] = "USER";
})(UserType || (UserType = {}));
var UserAuthOtpType;
(function(UserAuthOtpType2) {
  UserAuthOtpType2["RESET_PASSWORD"] = "RESET_PASSWORD";
  UserAuthOtpType2["EMAIL_VERIFICATION"] = "EMAIL_VERIFICATION";
})(UserAuthOtpType || (UserAuthOtpType = {}));
var OnlineStatus;
(function(OnlineStatus2) {
  OnlineStatus2["ONLINE"] = "ONLINE";
  OnlineStatus2["AWAY"] = "AWAY";
  OnlineStatus2["BUSY"] = "BUSY";
  OnlineStatus2["OFFLINE"] = "OFFLINE";
})(OnlineStatus || (OnlineStatus = {}));
var STORAGE_KEYS = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  CURRENT_USER: "current_user"
};

export {
  UserType,
  STORAGE_KEYS
};
//# sourceMappingURL=chunk-2UTZUB6A.js.map
