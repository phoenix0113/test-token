import React from "react";
import NFT from "components/NFT";
import { TokenContent, Section, Right, NFTContent } from "./styles";

const metaData = [
  {
    "image":"https://gateway.pinata.cloud/ipfs/QmewXeXsUhntN2Vdaft4fK8ySyX2QRYbg6751QKzxGMsXs/1.jpg",
    "attributes":[
      {
        "trait_type":"ID",
        "value":"1"
      }
    ],
    "name":"ERC721 Token 1",
    "description":"This is ERC721 Token 1",
    "price": 0.1,
  },
  {
    "image":"https://gateway.pinata.cloud/ipfs/QmewXeXsUhntN2Vdaft4fK8ySyX2QRYbg6751QKzxGMsXs/2.jpg",
    "attributes":[
      {
        "trait_type":"ID",
        "value":"2"
      }
    ],
    "name":"ERC721 Token 2",
    "description":"This is ERC721 Token 2",
    "price": 0.2,
  },
  {
    "image":"https://gateway.pinata.cloud/ipfs/QmewXeXsUhntN2Vdaft4fK8ySyX2QRYbg6751QKzxGMsXs/3.jpg",
    "attributes":[
      {
        "trait_type":"ID",
        "value":"3"
      }
    ],
    "name":"ERC721 Token 3",
    "description":"This is ERC721 Token 3",
    "price": 0.3,
  },
  {
    "image":"https://gateway.pinata.cloud/ipfs/QmewXeXsUhntN2Vdaft4fK8ySyX2QRYbg6751QKzxGMsXs/4.jpg",
    "attributes":[
      {
        "trait_type":"ID",
        "value":"4"
      }
    ],
    "name":"ERC721 Token 4",
    "description":"This is ERC721 Token 4",
    "price": 0.4,
  },
  {
    "image":"https://gateway.pinata.cloud/ipfs/QmewXeXsUhntN2Vdaft4fK8ySyX2QRYbg6751QKzxGMsXs/5.jpg",
    "attributes":[
      {
        "trait_type":"ID",
        "value":"5"
      }
    ],
    "name":"ERC721 Token 5",
    "description":"This is ERC721 Token 5",
    "price": 0.5,
  },
  {
    "image":"https://gateway.pinata.cloud/ipfs/QmewXeXsUhntN2Vdaft4fK8ySyX2QRYbg6751QKzxGMsXs/6.jpg",
    "attributes":[
      {
        "trait_type":"ID",
        "value":"6"
      }
    ],
    "name":"ERC721 Token 6",
    "description":"This is ERC721 Token 6",
    "price": 0.6,
  },
  {
    "image":"https://gateway.pinata.cloud/ipfs/QmewXeXsUhntN2Vdaft4fK8ySyX2QRYbg6751QKzxGMsXs/7.jpg",
    "attributes":[
      {
        "trait_type":"ID",
        "value":"7"
      }
    ],
    "name":"ERC721 Token 7",
    "description":"This is ERC721 Token 7",
    "price": 0.7,
  },
  {
    "image":"https://gateway.pinata.cloud/ipfs/QmewXeXsUhntN2Vdaft4fK8ySyX2QRYbg6751QKzxGMsXs/8.jpg",
    "attributes":[
      {
        "trait_type":"ID",
        "value":"8"
      }
    ],
    "name":"ERC721 Token 8",
    "description":"This is ERC721 Token 8",
    "price": 0.8,
  },
  {
    "image":"https://gateway.pinata.cloud/ipfs/QmewXeXsUhntN2Vdaft4fK8ySyX2QRYbg6751QKzxGMsXs/9.jpg",
    "attributes":[
      {
        "trait_type":"ID",
        "value":"9"
      }
    ],
    "name":"ERC721 Token 9",
    "description":"This is ERC721 Token 9",
    "price": 0.9,
  },
  {
    "image":"https://gateway.pinata.cloud/ipfs/QmewXeXsUhntN2Vdaft4fK8ySyX2QRYbg6751QKzxGMsXs/10.jpg",
    "attributes":[
      {
        "trait_type":"ID",
        "value":"10"
      }
    ],
    "name":"ERC721 Token 10",
    "description":"This is ERC721 Token 10",
    "price": 1,
  },
  {
    "image":"https://gateway.pinata.cloud/ipfs/QmewXeXsUhntN2Vdaft4fK8ySyX2QRYbg6751QKzxGMsXs/11.jpg",
    "attributes":[
      {
        "trait_type":"ID",
        "value":"11"
      }
    ],
    "name":"ERC721 Token 11",
    "description":"This is ERC721 Token 11",
    "price": 1.1,
  },
  {
    "image":"https://gateway.pinata.cloud/ipfs/QmewXeXsUhntN2Vdaft4fK8ySyX2QRYbg6751QKzxGMsXs/12.jpg",
    "attributes":[
      {
        "trait_type":"ID",
        "value":"12"
      }
    ],
    "name":"ERC721 Token 12",
    "description":"This is ERC721 Token 12",
    "price": 1.2,
  }
]

export default function ERC721Token() {
  return (
    <TokenContent>
      <NFTContent>
        {
          metaData.map(item => (
            <NFT
              key={Math.random() * 100000000000}
              name={item.name}
              description={item.description}
              attributes={item.attributes}
              image={item.image}
              price={item.price}
            />
          ))
        }
      </NFTContent>
    </TokenContent>
  )
}