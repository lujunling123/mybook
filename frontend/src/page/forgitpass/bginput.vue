<template>
  <div class="LoginBg">
    <div class="LoginInput"  v-if="inputWindow">
      <el-form  :ref="ruleForm" :model="ruleForm" status-icon :rules="rules">
        <el-form-item prop="phone">
          <el-input style="margin-top: 9.5%;" type="text"  v-model="ruleForm.phone" placeholder="请输入手机号/邮箱" v-on:change="but(ruleForm.phone)"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password"  placeholder="新密码/长度不低于6位(数字+字母)"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input style="float: left; width: 62%" type="text" v-model="ruleForm.code"  placeholder="请输入验证码"></el-input>
          <el-button id="yz" ref="yzbut" :disabled="disabled" :class="{testButton:tb, hoverButton:hb}" style="float: right;margin-top: 1.5px;border-radius:5%;font-size:15px;padding: 10.5px 20px;width: 36%;" v-on:blur="onSetTime"  @click="onCodebutton">
            {{btntxt}}
          </el-button>
        </el-form-item>
        <el-button type="submit" @click="onSubmit(ruleForm)" style="width: 100%;background-color: #ffd100;font-family: '微软雅黑';border-color: #ffd100;color:black;" plain><b>提交</b></el-button>
        <div style="margin-top: 15%"></div>
      </el-form>
    </div>
    <div class="SuccessBg" v-else="successWindow">
      <div class="success_Logo"></div>
      <div class="success_Div">
        <p class="successP">密码修改成功 !
          <router-link class="link_color"  :to="{ name: 'login', params: { phone: this.ruleForm.phone } }">立即登录</router-link>
        </p>
      </div>
      <div style="text-align:center"><span style="font-size:28px;color: #9fa4ad" class="seconds">{{letSeconds}}S</span></div>
      <div style="margin-top: 10%"></div>
    </div>
  </div>
</template>


<style lang="less" scoped>
  @import "../../common/stylus/base.less";

  .LoginBg{
    width:90%;
    height: 346.6px;
    padding-bottom: 3%;
    z-index: 100;
    border: 1px solid white;
    background-color: white;
    margin: 0 auto;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;

    .SuccessBg {
      /*margin-top: 40.5%;*/

      .success_Logo {
        width:86px;
        height:103px;
        background:url("regist_success.png") no-repeat;
        margin:5% auto;
      }
      .success_Div {
        .successP{
          width:100%;
          font-size:28px;
          line-height: 45px;
          text-align: center;
          .link_color {
            color: #ffd100;
          }
        }
      }
    }
    .LoginInput{
      width: 60%;
      z-index: 100;
      border: 1px solid white;
      background-color: white;
      margin: 0 auto;

      .el-button--warning{
        background-color: #ffd100;
        border-color: #ffd100;
        margin: 0 auto;
        margin-top:5%;
        width:100%;
      }
      .el-button {
        // border-radius: 0px;
      }
    }
    .testButton {
      color:rgb(135, 141, 153);
      border: 1px solid rgb(207, 209, 214);
      border-radius:5%;
      background-color:rgb(243, 244, 245);
    }
    .hoverButton{
      color: white;
      border: 1px solid #9fa4ad;
      border-radius:5%;
      background-color:#9fa4ad;
    }

  }
</style>
<script>
  import { mapActions } from 'vuex'
  import http from '@/components/request.js'
  export default {
    data () {
      return {
        ruleForm: {
          phone: '',
          password: '',
          code: ''
        },
        tb: true,
        hb: false,
        inputWindow: true,
        successWindow: false,
        letSeconds: '5',
        disabled: true,
        time: 60,
        btntxt: '发送验证码',
        rules: {
          phone: [
            {required: true, message: '请输入手机号或邮箱', trigger: 'blur'},
            { validator: (rule, value, callback) => {
              if (Number.isNaN(Number(value))) {
                // 如果是邮箱
                let reg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
                if (!(reg.test(value))) {
                  callback('请输入正确的邮箱')
                } else {
                  callback()
                }
              } else {
                if (!(/^1[34578]\d{9}$/.test(value))) {
                  callback(new Error('不是规范格式的手机号'))
                } else {
                  this.isRegister().then((res) => {
                    if (res.status === 20) {
                      callback(new Error('该帐号未注册'))
                    } else if (res.status === 50) {
                      callback()
                    }
                  })
                }
              }
            }, trigger: 'blur' }
          ],
          password: [
            {required: true, message: '请设置密码', trigger: 'blur'},
            { validator: function (rule, value, callback) {
              if (!(value.length <= 10 && value.length >= 6)) {
                callback(new Error('密码长度6-10位，且只可以字母和数字'))
              } else {
                callback()
              }
            }, trigger: 'blur' }
          ],
          code: [
            {required: true, message: '请输入验证码', trigger: 'change, blur'}
          ]
        }
      }
    },
    methods: {
      onSubmit (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // http.get('account/findpwd', {
            //   phone: this.ruleForm.phone,
            //   password: this.ruleForm.password,
            //   code: this.ruleForm.code
            // })
            //   .then(res => {
            //     console.log(res.data)
            //     if (res.data.status === 20) {
            //       this.inputWindow = false
            //       this.successWindow = true
            //     } else {
            //       console.log('修改失败')
            //     }
            //   })
            if (this.ruleForm.code === '1234') {
              this.inputWindow = false
              this.successWindow = true
            } else {
              console.log('修改失败')
            }
          } else {
            return false
          }
        })
      },
      // 获取验证码
      onCodebutton () {
        // let phone = this.ruleForm.phone
        // http.get('unchk/check/genercode', {phone: phone}).then(res => {
        //   if (res.data.status === 20) {
        //     console.log(res.data)
        //     this.onSetTime()
        //   }
        // })
        this.onSetTime()
      },
      onSetTime () {
        let Interval = setInterval(() => {
          this.time = this.time -1
          if (this.time >= 0) {
            this.btntxt = this.time + 's'
            this.disabled = true
          } else {
            clearInterval(Interval)
            this.time = 60
            this.btntxt = '获取验证码'
            this.disabled = false
          }
        }, 1000)
      }, // 验证是否注册
      isRegister () {
        return http.get('unchk/register/isregister', {phone: this.ruleForm.phone}).then((res) => {
          return res.data
        })
      },
      but (value) {
        let reg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
        let reg2 = /^1[34578]\d{9}$/
        if ((reg.test(value)) || (reg2.test(value))) {
          this.tb = false
          this.hb = true
          this.disabled = false
        } else {
          this.tb = true
          this.hb = false
          this.disabled = true
        }
      },
      ...mapActions([
        /*      'onCode',
                'onChackCode',
                'onUpdate'  */
      ])
    },
    watch: {
      successWindow: function (val) {
        if (val === true) {
          // setInterval表示命令开始，clearInterval是结束setInterval，结束时必须传入一个setInterval的id(Interval)
          // 在setInterval方法中this不再适用
          let Interval = setInterval(() => {
            this.letSeconds = this.letSeconds -1
            if (this.letSeconds === 0) {
              clearInterval(Interval)
              this.$router.push('/login')
            }
          }, 1000)
        }
      }
    }
  }
</script>
