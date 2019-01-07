const getters = {
    sidebar: state => state.app.sidebar, // 手风琴折叠状态
    theme: state => state.app.theme, // 主题色
    token: state => state.user.userData.accessToken,
    username: state => state.user.userData.username,
    userType: state => state.user.userData.userType
}
export default getters
