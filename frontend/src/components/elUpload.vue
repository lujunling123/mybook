<template>
  <el-upload
    class="avatar-uploader"
    :action="upurl"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <img v-if="image" :src="image" class="avatar" style="width: 100px;height: 100px;border-radius: 50%" >
    <i v-else class="avatar-uploader-icon el-icon-plus"></i>
  </el-upload>
</template>
<style scoped lang="less">

</style>

<script>
  import consts from '@/common/consts'
  export default {
    data () {
      return {
        user: this.$store.state.login.userInfo,
        upurl: consts.baseUrl + 'admincheck/uploadimg',
        image: ''
      }
    },
    props: ['imageUrl', 'toUpdate'],
    created () {
      this.image = this.imageUrl
    },
    methods: {
      handleAvatarSuccess (res, file) {
        if (res.status == 20) {
          this.image = URL.createObjectURL(file.raw)
          this.$emit('resUrl', res)
          // 图片上传成功后，触发确认按钮事件
          this.$emit('isUpload')
        }
      },
      beforeAvatarUpload (file) {
        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isJPG && isLt2M
      }
    }
  }
</script>
