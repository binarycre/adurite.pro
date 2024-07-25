import React from 'react';

export default function Home() {
  const products = [
    {
      name: "Roblox Wild West | Weapons & Items | READ DESCRIPTION!",
      price: "$8.29 - $11.99",
      img: "https://i.ebayimg.com/images/g/BjsAAOSwt6NmSeyu/s-l960.webp",
      link: "https://www.ebay.com/itm/145877219893"
    },
    {
      name: "Roblox Dragon Adventures | Solarizon",
      price: "$4.89",
      img: "https://i.ebayimg.com/images/g/lisAAOSwtgtlPlx2/s-l1600.webp",
      link: "https://www.ebay.com/itm/145399823766"
    },
    {
      name: "Roblox Murder Mystery 2 (MM2) Weapons & Pets",
      price: "$0.99 - $6.89",
      img: "https://i.ebayimg.com/images/g/qdAAAOSw9phmkqkY/s-l1600.webp",
      link: "https://www.ebay.com/itm/145907239411"
    },
    {
      name: "Roblox Creatures of Sonaria (COS) | Creatures",
      price: "$0.99 - $5.99",
      img: "https://i.ebayimg.com/images/g/2yoAAOSw40hmoRsj/s-l1600.webp",
      link: "https://www.ebay.com/itm/145908991806"
    },
    {
      name: "Roblox Islands | Items & Weapons | Read Description !",
      price: "$7.99 - $34.99",
      img: "https://i.ebayimg.com/images/g/ZwAAAOSwEFZmoXAB/s-l1600.webp",
      link: "https://www.ebay.com/itm/145909331008"
    },
  ];

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="grid grid-cols-5">
        {products.map((product, index) => (
          <div key={index} className="text-black p-5 max-w-[300px] rounded-md text-center mb-10" style={{ backgroundColor: "white" }}>
            <img className="rounded-md" src={product.img} alt={product.name} />
            <h3 className="text-lg" style={{ fontWeight: 500 }}>{product.name}</h3>
            <p className="text-red-500">{product.price}</p>
            <a href={product.link} className="btn btn-accent text-white rounded-md hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[2px_2px_0px_black]">Purchase on eBay</a>
          </div>
        ))}
      </div>
    </main>
  );
}
