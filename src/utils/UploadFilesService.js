import http from "@/http-common";

class UploadFilesService {
  upload(file, filename, onUploadProgress) {
    const myNewFile = new File([file], filename, {type: file.type});
    let formData = new FormData();

    formData.append("file", myNewFile);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }

  getFiles() {
    return http.get("/files");
  }
}

export default new UploadFilesService();