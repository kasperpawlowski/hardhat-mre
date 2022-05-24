// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity >=0.8.0;

import "hardhat/console.sol";

contract ChainIdTest {
    constructor() {}

    /// @dev Returns the chain id used by tnpx his contract.
    function getChainId() public view returns (uint256) {
        uint256 id;

        assembly {
            id := chainid()
        }
        console.log("chainId is %s ", id);
        return id;
    }
}
