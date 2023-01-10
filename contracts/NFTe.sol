// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// Contract NFTe is ERC721
contract NFTe is ERC721 {

    constructor(string memory _name,string memory _symbol) ERC721(_name,_symbol) {
        // minting NFT for myself
        _mint(msg.sender, 1);
        _mint(msg.sender, 2);
        _mint(msg.sender, 3);
        _mint(msg.sender, 4);
        _mint(msg.sender, 5);
    }

}