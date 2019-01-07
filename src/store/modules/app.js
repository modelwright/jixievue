
const app = {
    state: {
        sidebar: 'turn-on'
    },
    mutations: {
        setTransition(state, states) {
            state.states = states
        }
    },
    actions: {
        ToggleSideBar: ({commit},states) => {
            commit('setTransition',states)
        }
    }
}

export default app