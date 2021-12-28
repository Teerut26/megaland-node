# API Reference Update : 26/12/21

## Install

```
$ npm i https://github.com/Teerut26/megaland-node.git
```

## Import

```javascript
const { Megaland } = require("megaland-node");
```

## Create Instance

```javascript
let megaland = new Megaland();
```

## Use Methods

#### getListItems()

```javascript
//example
megaland.getListItems(1000).then(res => console.log(res))


//response
{
    __typename: 'ItemListingEntity',
    buyerAddress: null,
    createdTime: '1640499091',
    id: '1318089',
    kap20TokenAddress: '0x7d984c24d2499d840eb3b7016077164e15e5faa6',
    nftTokenAddress: '0xd08ac40b3a0a7fb20b026a3b6cd5d7cfadc3d6f5',
    nftType: 'KAP721',
    owner: '0x186553ce3696f582422d5e882809c56cb817b5da',
    price: '80000000000000000',
    status: 'LISTING',
    tokenUri: 'QmeFnSBuBf4wqkEj2rKxRQj6yUaTqLNN7Sgej7JbFE4Uu2',
    updatedTime: '1640499091'
  }
```

#### getDetailNFT()

```javascript
//example
megaland.getDetailNFT("QmX3peaJWRM8S6NfsjqCUrEZvgeyHKsdpriLbWa9HCLAvs").then(res => console.log(res))


//response
{
  name: 'Apple Archer',
  description: 'Rare head cosmetic',
  image: 'https://ipfs.morningmoonvillage.com/ipfs/QmP6VEC1WBhDV5oUNyzra8qYSYB1L2CczrqvPTP9RYLkeZ',
  hashtags: [ 'MorningMoonVillage', 'x10', 'Gamefi', 'NFT' ],
  attributes: [
    { trait_type: 'Consumable', value: false },
    { trait_type: 'Class', value: 'Hat' },
    { trait_type: 'Type', value: 4 },
    { trait_type: 'Rarity', value: 'Rare' },
    { trait_type: 'Limited', value: 10000 }
  ]
}
```

#### search()

```javascript
//example
megaland.search("Apple Archer").then(res => console.log(res))


//response
{
  data: [
    {
      name: 'Apple Archer',
      nft_token: '0xd08ac40b3a0a7fb20b026a3b6cd5d7cfadc3d6f5',
      rarity: 'Rare'
    },
    {
      name: 'Kin-Ar-Rai-Dee Kub',
      nft_token: '0xca505cb4a67d986c7c2e3c8950a2b4db9c300e06',
      rarity: 'Normal'
    },
    {
      name: "Ann's Half Body Application photo",
      nft_token: '0x8523aee1e5e8ee3b00a050883e69a14dc72fc0d8',
      rarity: 'Normal'
    },
    {
      name: "Ann's Close Up Application photo",
      nft_token: '0x8523aee1e5e8ee3b00a050883e69a14dc72fc0d8',
      rarity: 'Normal'
    },
    {
      name: "Ann's Full Body Application photo",
      nft_token: '0x8523aee1e5e8ee3b00a050883e69a14dc72fc0d8',
      rarity: 'Normal'
    },
    {
      name: 'Red Apple',
      nft_token: '0xd08ac40b3a0a7fb20b026a3b6cd5d7cfadc3d6f5',
      rarity: 'Common'
    },
    {
      name: 'Green Apple',
      nft_token: '0xd08ac40b3a0a7fb20b026a3b6cd5d7cfadc3d6f5',
      rarity: 'Common'
    },
    {
      name: 'Dried Apple',
      nft_token: '0xd08ac40b3a0a7fb20b026a3b6cd5d7cfadc3d6f5',
      rarity: 'Rare'
    }
  ],
  total: 8
}
```


