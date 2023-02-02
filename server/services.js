import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()
import bcrypt from 'bcrypt'
import sql from './sql.js'
// const nodemailer = require('nodemailer')
// const currentDate = require('../helpers/getCurrentDate')
// const uuid = require('uuid')
// const queries = require('../sql-query')
// const url = require('../helpers/getURL')
// const userDtoFunc = require('../dtos/user-dto')

class UserService {
  addPost() {
    // ...
  }
  async loginUser(username, password) {
    // есть ли такой пользователь в бд?
    // const isValidPassword = bcrypt.compare(password, )
    const data = { username, password }
    const accessToken = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })
    const refreshToken = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
    return { accessToken, refreshToken }
  }
  async registerUser(login, email, password) {
    // const refreshToken = jwt.sign(payload, 'process.env.JWT_REFRESH_SECRET', {
    //   expiresIn: '30d',
    // })

    // const hasUserByEmail = await queries.getUserByEmail(email)
    // if (hasUserByEmail.length) {
    //   throw new Error(`Пользователь с почтой ${email} существует`)
    // }
    // const hasUserByLogin = await queries.getUserByLogin(login)
    // if (hasUserByLogin.length) {
    //   throw new Error(`Пользователь с почтой ${email} существует`)
    // }

    // const user = await queries.createUser(login, email, password, date)
    // const userDto = userDtoFunc(user)
    // const tokens = this.generateToken({ ...userDto })
    // const activateUrl = `${url.server}/activateAccount?link=${activationLink}`
    // this.sendMessage(email, activateUrl)
    // this.saveToken(userDto.user_id, tokens.refreshToken)
    // const hasUser = await queries.getUserByEmail(email)
    // if (hasUser.length) {
    //   throw new Error(`Пользователь с почтой ${email} существует`)
    // }
    const hashPassword = await bcrypt.hash(password, 3)
    const data = { hashPassword, email, login }
    const a = await sql.createUser(email, login, hashPassword)
    // отправить данные в бд
    const accessToken = await jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: '24h',
    })

    return accessToken
  }
  // async getLists() {
  //   return await queries.getCategories()
  // }
  // generateToken(payload) {
  //   const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
  //     expiresIn: '30s',
  //   })
  //   const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
  //     expiresIn: '30d',
  //   })
  //   return { refreshToken, accessToken }
  // }
  // async saveToken(userId, refreshToken) {
  //   const tokenData = await queries.getUserById(userId)
  //   if (tokenData.length) {
  //     queries.updateRefreshToken(refreshToken)
  //   } else {
  //     queries.createAuth(userId, refreshToken)
  //   }
  // }
  // async sendMessage(email, link) {
  //   let transporter = nodemailer.createTransport({
  //     service: 'gmail',
  //     host: 'smtp.gmail.com',
  //     auth: {
  //       user: 'eforfora@gmail.com',
  //       pass: 'tubzteysoybrjuki',
  //     },
  //   })
  //   transporter.sendMail({
  //     to: email,
  //     text: `Your link: ${link}`,
  //   })
  // }
  // async registrationUser(email, password) {
  //   const hasUser = await queries.getUserByEmail(email)
  //   if (hasUser.length) {
  //     throw new Error(`Пользователь с почтой ${email} существует`)
  //   }
  //   const hashPassword = await bcrypt.hash(password, 3)
  //   const activationLink = uuid.v4()
  //   const user = await queries.createUser(
  //     email,
  //     hashPassword,
  //     currentDate(),
  //     activationLink
  //   )
  //   const userDto = userDtoFunc(user)
  //   const tokens = this.generateToken({ ...userDto })
  //   const activateUrl = `${url.server}/activateAccount?link=${activationLink}`
  //   this.sendMessage(email, activateUrl)
  //   this.saveToken(userDto.user_id, tokens.refreshToken)
  //   return { user: userDto, ...tokens }
  // }
  // async activate(activationLink) {
  //   const user = await queries.getUserByActivationLink(activationLink)
  //   if (!user.length) throw 'Пользователя не существует или ссылка не активна'
  //   await queries.changeUsersStatus(activationLink)
  // }
  // async login(email, password) {
  //   const user = await queries.getUserByEmail(email)
  //   if (!user) throw 'Пользователь не был найден'
  //   const hashPassword = await bcrypt.compare(password, user.user_password)
  //   if (!hashPassword) throw 'Неправильный пароль'
  //   const userDto = userDtoFunc(user)
  //   const tokens = this.generateToken({ ...userDto })
  //   await this.saveToken(userDto.user_id, tokens.refreshToken)
  //   return { ...tokens, user: userDto }
  // }
  // async logout(refreshToken) {
  //   queries.deleteRefreshToken(refreshToken)
  // }
  // validateAccessToken(token) {
  //   try {
  //     const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
  //     return userData
  //   } catch (error) {
  //     return null
  //   }
  // }
  // validateRefreshToken(token) {
  //   try {
  //     const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
  //     return userData
  //   } catch (error) {
  //     return null
  //   }
  // }
  // async refreshToken(refreshToken) {
  //   if (!refreshToken) throw 'Некоректно'
  //   const userData = await this.validateRefreshToken(refreshToken)
  //   const tokenFromDb = await queries.getTokenByToken(refreshToken)
  //   if (!userData || !tokenFromDb) throw 'Ошибка при авторизации'
  //   const user = await queries.getUserByEmail(userData.user_email)
  //   const userDto = userDtoFunc(user)
  //   const tokens = this.generateToken({ ...userDto })
  //   await this.saveToken(userDto.user_id, tokens.refreshToken)
  //   return { ...tokens, user: userDto }
  // }
}

export default new UserService()
