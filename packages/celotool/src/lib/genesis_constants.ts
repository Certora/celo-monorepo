export const GETH_CONFIG_OLD = {
  chainId: 1101,
  homesteadBlock: 1,
  eip150Block: 2,
  eip150Hash: '0x0000000000000000000000000000000000000000000000000000000000000000',
  eip155Block: 3,
  eip158Block: 3,
  byzantiumBlock: 4,
}

export const TEMPLATE = {
  config: {
    homesteadBlock: 0,
    eip150Block: 0,
    eip150Hash: '0x0000000000000000000000000000000000000000000000000000000000000000',
    eip155Block: 0,
    eip158Block: 0,
    byzantiumBlock: 0,
    constantinopleBlock: 0,
    petersburgBlock: 0,
  },
  nonce: '0x0',
  timestamp: '0x5b843511',
  gasLimit: '0x8000000',
  extraData:
    '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000feE1a22F43BeeCB912B5a4912ba87527682ef0fC889F21CE69dcc25a4594f73230A55896d67038065372d2bbBaBaAf1495182E31cF13dB0d18463B0EF71690ea7E0c67827d8968882FAC0c4cBBD65BCE0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  difficulty: '0x0400',
  coinbase: '0x0000000000000000000000000000000000000000',
  alloc: {},
  number: '0x0',
  gasUsed: '0x0',
  mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
  parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
}

export const REGISTRY_ADDRESS = '000000000000000000000000000000000000ce10'

export const CONTRACT_OWNER_STORAGE_LOCATION =
  '0x34dc5a2556b2030988481969696f29fed38d45813d8003f6c70e5c16ac92ae0f'
export const ISTANBUL_MIX_HASH =
  '0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365'

export const OG_ACCOUNTS = [
  {
    name: 'gethminer1',
    privateKey: 'a2d2c843bb2c6b6aed146343b8aec7d23a7cc050f41c6217760d46095bfc49cd',
    address: 'feE1a22F43BeeCB912B5a4912ba87527682ef0fC',
  },
  {
    name: 'gethminer2',
    privateKey: '898a61ff4d42360802c9897bc2df1298d2df9153cb761ca55b5dc1bb940f44dc',
    address: '889F21CE69dcc25a4594f73230A55896d6703806',
  },
  {
    name: 'gethminer3',
    privateKey: '6005018fe530da09942a016921a185cabef0fbcc10e63fe2b45805b2957f6ec9',
    address: '5372d2bbBaBaAf1495182E31cF13dB0d18463B0E',
  },
  {
    name: 'gethminer4',
    privateKey: '1310f2a9c32d52dbbabc28dbaa9ca4c5c826d59664320b597effa66155c72c61',
    address: 'F71690ea7E0c67827d8968882FAC0c4cBBD65BCE',
  },
]
