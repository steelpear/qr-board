const mongoose = require('mongoose')
const { Schema } = mongoose
 
const Settings = new Schema({
  switchDonate: Boolean,
  switchReCAPTCHA: Boolean,
  switchCookie: Boolean,
  yandexMoney: String,
  adminMail: String,
  ReCAPTCHAkey: String,
  YandexMapkey: String
})
module.exports = mongoose.model('Settings', Settings)
