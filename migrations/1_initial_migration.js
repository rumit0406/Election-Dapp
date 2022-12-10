var Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
    deployer.then(async () => {
        await deployer.deploy(Migrations);
    });
};
