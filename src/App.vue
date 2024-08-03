<template>
  <div class="main-container">
    <div v-if="uploadFile" class="preview-container">
      <VueFilesPreview :file="uploadFile" />
    </div>
    <div v-else class="upload-btn">
      <el-upload
        ref="uploadRef"
        drag
        action="null"
        :limit="1"
        :before-upload="beforeFileUpload"
      >
        <el-icon class="el-icon--upload"><i-ep-upload-filled /></el-icon>
        <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
      </el-upload>
    </div>
  </div>
</template>

<script lang="ts" setup>
const uploadRef = ref();
const uploadFile = ref();

const beforeFileUpload = (rawFile) => {
  uploadFile.value = rawFile;
  return false;
};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;

  .upload-btn {
    width: 60%;

    ::v-deep(.el-upload-dragger) {
      height: 40vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .el-icon--upload {
        font-size: 120px;
      }

      .el-upload__text {
        font-size: 24px;
      }
    }
  }

  .preview-container {
    height: 100%;
    width: 100%;
  }
}
</style>
