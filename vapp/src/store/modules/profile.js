import erc20 from "@studydefi/money-legos/erc20";

const state = {
  daiBalance: 0
};

const getters = {
  getDaiBalance(state) {
    return state.daiBalance;
  }
};

const actions = {
  async fetchDaiBalance({ commit, rootState }) {
    let web3 = rootState.drizzle.drizzleInstance.web3;
    let activeAccount = rootState.accounts.activeAccount;

    // get Dai contract
    const daiContract = new web3.eth.Contract(erc20.dai.abi, erc20.dai.address);

    // get Dai balance for the active user
    const smallUnitBalance = await daiContract.methods.balanceOf(activeAccount).call();

    // remove the 18 decimals and commit as balance
    commit("setDaiBalance", web3.utils.fromWei(smallUnitBalance, "ether"));
  }
};

const mutations = {
  setDaiBalance(state, balance) {
    state.daiBalance = balance;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};