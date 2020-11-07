const DaiBuyer = artifacts.require("DaiBuyer");

module.exports = function(deployer) {
  deployer.deploy(DaiBuyer);
};
