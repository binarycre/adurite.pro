import React from 'react';

export default function Home() {
  const products = [
    {
      name: "Roblox Wild West | Auction Weapons & Items",
      price: "$3.99 - $24.99",
      img: "https://i.ebayimg.com/images/g/BjsAAOSwt6NmSeyu/s-l960.webp",
      link: "https://www.ebay.com/itm/145796452288"
    },
    {
      name: "Roblox Dragon Adventures | Solarizon",
      price: "$7.69",
      img: "https://i.ebayimg.com/images/g/lisAAOSwtgtlPlx2/s-l1600.webp",
      link: "https://www.ebay.com/itm/145399823766"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="grid grid-cols-5">
        {products.map((product, index) => (
          <div key={index} className="text-black p-5 max-w-[300px] rounded-md text-center mb-10" style={{ backgroundColor: "white" }}>
            <img className="rounded-md" src={product.img} alt={product.name} />
            <h3 className="text-lg" style={{ fontWeight: 500 }}>{product.name}</h3>
            <p className="text-red-500">{product.price}</p>
            <a href={product.link} className="btn btn-accent text-white rounded-md">Purchase on eBay</a>
          </div>
        ))}
      </div>
    </main>
  );
}
