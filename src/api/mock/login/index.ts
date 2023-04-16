import Mock from "mockjs"

// 登录
Mock.mock(`/api/login`, "post", (option) => {
  // 解析请求参数
  const { username, password } = JSON.parse(option.body)

  if (username === "admin" && password === "123456") {
    return {
      code: 200,
      message: "登录成功",
      data: {
        token: "mock-token",
        userInfo: {
          username: "admin",
          usertitle: "DevEasy ErShuoZi",
          useremail: "liushuo2951@gmailcom"
        }
      }
    }
  } else if (username === "user" && password === "123456") {
    return {
      code: 200,
      message: "登录成功",
      data: {
        token: "mock-token",
        userInfo: {
          username: "user",
          usertitle: "DevEasy User",
          useremail: "deveasy@gmailcom"
        }
      }
    }
  } else {
    return {
      code: 400,
      message: "用户名或密码错误"
    }
  }
})

// 菜单
Mock.mock(`/api/userMenus`, "post", (option) => {
  // 解析请求参数
  const { token, username } = JSON.parse(option.body)

  if (token && username === "admin") {
    return {
      code: 200,
      message: "请求成功",
      data: [
        {
          path: "/layout/index",
          name: "home",
          component: "/layout/index",
          meta: {
            title: "首页"
          }
        },
        {
          path: "/layout/form",
          name: "form",
          component: "/layout/form",
          meta: {
            title: "表单"
          }
        }
      ]
    }
  } else if (token && username === "user") {
    return {
      code: 200,
      message: "请求成功",
      data: [
        {
          path: "/layout/index",
          name: "home",
          component: "/layout/index",
          meta: {
            title: "首页"
          }
        }
      ]
    }
  } else {
    return {
      code: 404,
      message: "请求失败,发生了404错误"
    }
  }
})
export default {}
