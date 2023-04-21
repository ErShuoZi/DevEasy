import Mock from "mockjs"

// 登录
Mock.mock(`/api/login`, "post", (option) => {
  // 解析请求参数
  const { username, password } = JSON.parse(option.body)

  if (username === "admin@demo.com" && password === "123456") {
    return {
      code: 200,
      message: "登录成功",
      data: {
        token: "mock-token",
        userInfo: {
          username: "admin@demo.com",
          usertitle: "DevEasy Admin",
          useremail: "deveasy@gmailcom"
        }
      }
    }
  } else if (username === "client@demo.com" && password === "123456") {
    return {
      code: 200,
      message: "登录成功",
      data: {
        token: "mock-token",
        userInfo: {
          username: "client@demo.com",
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

  if (token && username === "admin@demo.com") {
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
          },
          icon: "mdi-home-outline"
        },
        {
          path: "/layout/form",
          name: "form",
          component: "/layout/form",
          meta: {
            title: "表单"
          },
          icon: "mdi-list-box-outline"
        },
        {
          path: "/layout/table",
          name: "table",
          component: "/layout/table",
          meta: {
            title: "表格"
          },
          icon: "mdi-file-table-box-outline"
        },
        {
          path: "/layout/auth",
          name: "auth",
          component: "/layout/Auth",
          meta: {
            title: "权限"
          },
          icon: "mdi-lock-outline"
        },
        {
          path: "/layout/components",
          name: "components",
          component: "/layout/component",
          meta: {
            title: "常用组件"
          },
          icon: "mdi-store-outline"
        },
        {
          path: "/layout/echarts",
          name: "echarts",
          component: "/layout/echarts",
          meta: {
            title: "图表"
          },
          icon: "mdi-chart-box-outline"
        },
        {
          path: "/layout/directives",
          name: "directives",
          component: "/layout/directives",
          meta: {
            title: "自定义指令"
          },
          icon: "mdi-application-cog-outline"
        },
        {
          path: "/layout/menus",
          name: "menus",
          component: "/layout/menus",
          meta: {
            title: "菜单嵌套"
          },
          icon: "mdi-menu",
          children: [
            {
              path: "/layout/menus/index",
              name: "firstLevelMenu",
              component: "/layout/menus/index",
              meta: {
                title: "一级菜单"
              },
              icon: "mdi-circle-outline"
            },
            {
              path: "/layout/menus/second",
              name: "secondaryMenu",
              component: "/layout/menus/second",
              meta: {
                title: "二级菜单"
              },
              icon: "mdi-circle-outline",
              children: [
                {
                  path: "/layout/menus/third",
                  name: "thirdLevelMenu",
                  component: "/layout/menus/third",
                  meta: {
                    title: "三级菜单"
                  },
                  icon: "mdi-circle-outline"
                }
              ]
            }
          ]
        },
        {
          path: "/layout/system",
          name: "system",
          component: "/layout/system",
          meta: {
            title: "系统管理"
          },
          icon: "mdi-account-cog"
        }
      ]
    }
  } else if (token && username === "client@demo.com") {
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
          },
          icon: "mdi-home-outline"
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
