var AVToken = artifacts.require("./AVToken.sol");

contract('AVToken', function(accounts) {
	
	it('sets the total supply upon deployment', function(){
		return AVToken.deployed().then(function(instance){
			tokenInstance = instance;
			return tokenInstance.totalSupply();
		}).then(function(totalSupply){
			assert.equal(totalSupply.toNumber(),1000000,'sets the total Supply to 1,000,000')
		});

	});
})