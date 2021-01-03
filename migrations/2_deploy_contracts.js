const AVToken = artifacts.require("./AVToken.sol");

module.exports = function(deployer) {
  deployer.deploy(AVToken);
};
