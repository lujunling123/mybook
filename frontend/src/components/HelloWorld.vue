<template>
  <div id="login" class="center" style="z-index: -1;position: absolute;">
    <el-row>
      <el-col :span="7"><div class="grid-content "></div></el-col>
      <el-col :span="10">
        <div class="grid-content">
          <div class="bg-content">
            <div class="huluwsign"><img src=""></div>
            <div class="signs"><img src=""/></div>
            <div class="LoginBg">
              <div class="LoginInput">
                <el-form  ref="ruleForm" :model="ruleForm" status-icon  :rules="rules">
                  <div class="user_bt">登录</div>
                  <el-form-item style="margin-top: 40px;" label="" prop="username" >
                    <el-input id="un" v-model="ruleForm.username" placeholder="请输入手机号或邮箱"></el-input>
                  </el-form-item>
                  <el-form-item label="" prop="password">
                    <el-input id="pd" type="password" style="margin-top: 5px;" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
                  </el-form-item>
                  <!--<el-input style="margin-top: 5%;height: 30px"  v-model="hd"  placeholder="滑动"></el-input>-->
                  <el-checkbox id="jz" v-model="ruleForm.checked" style="float:left;margin-top: 5px;" >记住密码</el-checkbox>
                  <router-link id="wj" :to="{ name: 'forgitpass', params: {username: ruleForm.username }}" class="apass">忘记密码</router-link>
                  <div style="margin: 20px 0">

                    <el-button id="dl" type="submit" class="but_hcs" @click="onSubmit(ruleForm)" style="width: 100%;margin-top: 10%;" plain><b>登录</b></el-button>
                  </div>
                  <div>
                    <span style="color: #9fa4ad;margin-top: 40px;"><b>还没有帐号么？</b><router-link id="zc" to='/register' style="color: #ffd100" >立即注册</router-link></span>
                  </div>
                  <div style="margin-top: 10%"></div>
                  <!--<p :class="{alertp: isalert}" style="background: pink;border: 1px solid #000;">5秒后跳转到主界面</p>-->
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="7"><div class="grid-content3 "></div></el-col>
    </el-row>
  </div>
</template>

<script>
  import hea from '../page/header/index.vue'
  import {mapActions} from 'vuex'
  export default {
    components: {hea},
    data () {
      return {
        ruleForm: {
          username: '',
          password: '',
          checked: true
        },
        msga: '请输入正确邮箱',
        msgb: '请输入正确的手机号',
        rules: {
          username: [
            {required: true, message: '用户名不能为空', trigger: 'blur'},
            {validator:
              function (rule, value, callback) {
                if (Number.isNaN(Number(value))) {
                  // 如果是邮箱
                  let reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
                  if (!(reg.test(value))) {
                    callback(this.msga)
                  } else {
                    callback()
                  }
                } else {
                  let reg = /^1[34578]\d{9}$/
                  if (!(reg.test(value))) {
                    callback(this.msgb)
                  } else {
                    callback()
                  }
                }
              },
              trigger: 'blur,change'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {validator: function (rule, value, callback) {
              if (!(value.length <= 10 && value.length >= 6)) {
                callback(new Error('密码长度6-10位，且只可以字母和数字'))
              } else {
                callback()
              }
            },
              trigger: 'blur,change'}
          ]
        }
      }
    },
    methods: {
      onSubmit (ruleForm) {
        this.login({ phone: ruleForm.username, password: ruleForm.password }).then((res)=>{
          this.$message(res.msg || res.data.message)
          if (res.data.code === 20){
            this.$router.push('/forgitpass')
          } else {
            this.$router.push('/')
          }
        });
      },
      ...mapActions(['login'])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../common/stylus/base.less";
  #login{
    background-image: url("../../static/imgs/timg.jpg") ;
    height: 99.8%;
    width: 99.85%;
    border:1px solid #101013;
    margin: 0 auto;
    background-size: cover;
    min-width: 610px;
    min-height: 1322px;

    .grid-content {
      border-radius: 4px;
      min-height: 360px;
      min-width: 450px;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-content {
      margin-top: 10%;
      height: 100%;
      z-index: 100;
      .huluwsign{
        width: 100%;
        height: 29.9px;
        margin: 0 auto;
      }
      .signs{
        width:100%;
        height: 20px;
        margin-top: 5%;
      }
      .LoginBg{
        width: 70%;
        height: 100%;
        z-index: 100;
        border-radius: 4px;
        border: 1px solid white;
        background-color: white;
        margin: 0 auto;
        margin-top: 5%;
        .el-input {
          height: 40px;
          input {
            height: 100%;
          }
        }
        .LoginInput{
          width: 60%;
          z-index: 100;
          border: 1px solid white;
          background-color: white;
          margin: 0 auto;


          .el-checkbox__label {
            color: black;
            font-weight:bold;
          }

          .apass {
            font-size: 1.09em;
            float: right;
            color: #9fa4ad;
            margin-top: 5px;
          }
          .el-input__inner {
            color: #9fa4ad;
          }
        }
        .but_css {// 之前
          width:100%;
          font-family: "微软雅黑";
          color:#000;
          margin-top:3%;
          background-color: #f4f4f4;
          border-color: #f4f4f4;
        }
        .but_hcs {// 之后
          width:100%;
          font-family: "微软雅黑";
          color:#000;
          margin-top:3%;
          background-color: #ffd100;
          border-color: #ffd100;
        }
        .spanopen {
          display: none;
        }
        .spanpass {
          display: none;
        }
        .alertp{
          display: none;
        }
        .user_bt{
          margin-top: 9%;
          .text-lg
        }
      }
    }
  }
</style>
