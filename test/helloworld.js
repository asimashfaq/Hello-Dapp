var HelloWorld = artifacts.require("../contracts/HelloWorld.sol")
contract("HelloWorld",function(accounts){
  it("shoud have a default value of 1000",function(done){
      HelloWorld.deployed().then(function(instance){
        return instance.balance.call();
      }).then(function(balance){
        console.log(balance)
          assert.equal(1000,balance.valueOf(),"Balance was not 1000")
      }).then(done).catch(done);
  });
});
