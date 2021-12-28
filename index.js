const axios = require("axios");

class Megaland {
  async getListItems(limit = 10, filter = []) {
    let data_re = JSON.stringify({
      letiables: {},
      query: `fragment ItemListingEntityFields on ItemListingEntity {\n  id\n  owner\n  kap20TokenAddress\n  nftTokenAddress\n  nftType\n  price\n  status\n  createdTime\n  updatedTime\n  buyerAddress\n  tokenUri\n  __typename\n}\n\n{\n  itemListingEntities(\n    first: ${limit}\n    skip: 0\n    orderBy: createdTime\n    orderDirection: desc\n    where: {status: "LISTING", price_gte: "0", price_lte: "100000000000000000000000000"}\n  ) {\n    ...ItemListingEntityFields\n    __typename\n  }\n}\n`,
    });

    let config = {
      method: "post",
      url: "https://graphql.diamon.finance/subgraphs/name/MegalandMarketplace/v2",
      headers: {
        authority: "graphql.diamon.finance",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        accept: "*/*",
        "content-type": "application/json",
        "sec-ch-ua-mobile": "?0",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
        "sec-ch-ua-platform": '"Windows"',
        origin: "https://www.megaland.io",
        "sec-fetch-site": "cross-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        referer: "https://www.megaland.io/",
        "accept-language": "th-TH,th;q=0.9,en;q=0.8",
      },
      data: data_re,
    };
    let { data } = await axios(config);
    return data.data.itemListingEntities;
  }

  async getListItemsContinue(limit = 10, skip = 10, kap20TokenAddress = null) {
    let data_re = JSON.stringify({
      letiables: {},
      query: `fragment ItemListingEntityFields on ItemListingEntity {\n  id\n  owner\n  kap20TokenAddress\n  nftTokenAddress\n  nftType\n  price\n  status\n  createdTime\n  updatedTime\n  buyerAddress\n  tokenUri\n  __typename\n}\n\n{\n  itemListingEntities(\n    first: ${limit}\n    skip: ${skip}\n    orderBy: createdTime\n    orderDirection: desc\n    where: {status: \"LISTING\", kap20TokenAddress: \"${kap20TokenAddress}\"}\n  ) {\n    ...ItemListingEntityFields\n    __typename\n  }\n}\n`,
    });

    let config = {
      method: "post",
      url: "https://graphql.diamon.finance/subgraphs/name/MegalandMarketplace/v2",
      headers: {
        authority: "graphql.diamon.finance",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        accept: "*/*",
        "content-type": "application/json",
        "sec-ch-ua-mobile": "?0",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
        "sec-ch-ua-platform": '"Windows"',
        origin: "https://www.megaland.io",
        "sec-fetch-site": "cross-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        referer: "https://www.megaland.io/",
        "accept-language": "th-TH,th;q=0.9,en;q=0.8",
      },
      data: data_re,
    };
    let { data } = await axios(config);
    return data.data.itemListingEntities;
  }

  async getDetailNFT(uri = null) {
    let config = {
      method: "get",
      url: `https://ipfs.morningmoonvillage.com/ipfs/${uri}`,
      headers: {},
    };

    let { data } = await axios(config);
    return data;
  }

  async search(world = null) {
    let config = {
      method: "get",
      url: `https://backend.settrade.finance/marketplace/search?text=${world}`,
      headers: {},
    };

    let { data } = await axios(config);
    return data;
  }

  async FilterMuti(
    name = "Tree Branch Ring",
    filter = [{ key: "Rarity", value: "Common" }]
  ) {
    let data_re = JSON.stringify({
      name,
      filter,
    });

    let config = {
      method: "post",
      url: "https://backend.settrade.finance/marketplace/filter",
      headers: {
        authority: "backend.settrade.finance",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        accept: "application/json, text/plain, */*",
        "content-type": "application/json",
        "sec-ch-ua-mobile": "?0",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
        "sec-ch-ua-platform": '"Windows"',
        origin: "https://www.megaland.io",
        "sec-fetch-site": "cross-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        referer: "https://www.megaland.io/",
        "accept-language": "th-TH,th;q=0.9,en;q=0.8",
      },
      data: data_re,
    };

    let { data } = await axios(config);
    return data;
  }
}

module.exports = { Megaland };
