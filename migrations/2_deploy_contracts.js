var Election = artifacts.require("Election");

module.exports = function (deployer) {
    deployer.then(async () => {
        await deployer.deploy(Election);
    });
};
