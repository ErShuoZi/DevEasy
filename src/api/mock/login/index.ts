import Mock from "mockjs"

Mock.mock(`/api/login`, "post", (option) => {
  // 解析请求参数
  const { username, password } = JSON.parse(option.body)

  if (username === "admin" && password === "123456") {
    return {
      code: 200,
      message: "登录成功",
      data: {
        token: "mock-token"
      }
    }
  } else {
    return {
      code: 400,
      message: "用户名或密码错误"
    }
  }
})
export default {}
