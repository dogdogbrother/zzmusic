import React, { useState } from 'react';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import { DialogWrap, DialogContent, DialogHeader, DialogMain, Dialogbtns } from './style'
import { Input } from '@/styles/style-component.js'
import { verifyLength, verifyEnglish, verifyMaxLength, passwordSame } from '@/config/verify'

const Dialog = (props) => {
  const {dialogStatus, dispatch } = props
  const [isLogin, setIsLogin] = useState(true) // 控制是登陆，还是注册
  const [loginForm, setLoginForm] = useState({userName: '', password: ''})
  const [registerForm, setRegisterForm] = useState({
    userName: '', 
    nickName: '',
    password: '',
    affirmPassword: ''
  })
  function dialogCancel() {
    dispatch({
      type: 'loginDialog/changeDialog',
      payload: {
        dialogStatus: false,
      }
    })
    setIsLogin(true)
  }
  /**
   * @description 先校验，成功后 发起 axios 请求
   */
  function login() {
    let toastText = []
    toastText.push(verifyLength({content: loginForm.userName, name:"用户名"}))
    toastText.push(verifyEnglish({content: loginForm.userName, name:"用户名" }))
    toastText.push(verifyLength({content: loginForm.password, name:"密码"}))
    const findIndex = toastText.findIndex(text => text)
    if (findIndex > -1) {
      dispatch({
        type: 'toast/showToast',
        payload: {
          toastStatus: true,
          toastText: toastText[findIndex],
        }
      })
    } else {
      dispatch({
        type: 'loginDialog/registerOrLogin',
        payload: loginForm
      })
    }
  }
  function register() {
    let toastText = []
    toastText.push(verifyLength({content: registerForm.userName, name:"用户名"}))
    toastText.push(verifyEnglish({content: registerForm.userName, name:"用户名" }))
    toastText.push(verifyMaxLength({content: registerForm.userName, name:"昵称"}))
    toastText.push(verifyLength({content: registerForm.password, name:"密码"}))
    toastText.push(passwordSame({password: registerForm.password, affirmPassword: registerForm.affirmPassword}))
    const findIndex = toastText.findIndex(text => text)
    if (findIndex > -1) {
      dispatch({
        type: 'toast/showToast',
        payload: {
          toastStatus: true,
          toastText: toastText[findIndex],
        }
      })
    } else {
      dispatch({
        type: 'loginDialog/registerOrLogin',
        payload: registerForm
      })
    }
  }
  function updateLoginField(e) {
    if (isLogin) {
      setLoginForm({
        ...loginForm,
        [e.target.name]: e.target.value
      })
    } else {
      setRegisterForm({
        ...registerForm,
        [e.target.name]: e.target.value
      })
    }
    
  }
  return (
    <>
      {
        dialogStatus && 
        <DialogWrap>
          <div className="wrap">
            {
              isLogin ?
              <QueueAnim duration={400} type='scale'>
                <DialogContent key="a">
                  <DialogHeader>登陆</DialogHeader>
                  <DialogMain>
                    <Input 
                      autoFocus 
                      placeholder="请输入您的账户名" 
                      name="userName" 
                      value={loginForm.userName}  
                      onChange={updateLoginField}
                    />
                    <Input 
                      placeholder="密码" 
                      type="password" 
                      name="password" 
                      value={loginForm.password}  
                      onChange={updateLoginField}
                    />
                  </DialogMain>
                  <Dialogbtns>
                    <div onClick={dialogCancel}>取消</div>
                    <div onClick={() => setIsLogin(false)}>注册</div>
                    <div onClick={login}>登陆</div>
                  </Dialogbtns>
                </DialogContent>
              </QueueAnim>
                :
              <DialogContent key="b">
                <DialogHeader>注册</DialogHeader>
                <DialogMain>
                  <Input 
                    autoFocus 
                    placeholder="请输入用户名" 
                    name="userName" 
                    value={registerForm.userName}  
                    onChange={updateLoginField}
                  />
                  <Input 
                    placeholder="请输入昵称" 
                    name="nickName" 
                    value={registerForm.nickName}  
                    onChange={updateLoginField}
                  />
                  <Input 
                    placeholder="请输入密码" 
                    name="password"
                    type="password" 
                    value={registerForm.password}  
                    onChange={updateLoginField}
                  />
                  <Input 
                    placeholder="请再次确认密码" 
                    type="password" 
                    name="affirmPassword"
                    value={registerForm.affirmPassword}  
                    onChange={updateLoginField}
                  />
                </DialogMain>
                <Dialogbtns>
                  <div onClick={dialogCancel}>取消</div>
                  <div onClick={() => setIsLogin(true)}>返回登陆</div>
                  <div onClick={register}>提交</div>
                </Dialogbtns>
              </DialogContent>
            }
          </div>
        </DialogWrap>
      }
    </>
  )
}

export default connect(({loginDialog})=> loginDialog)(Dialog);