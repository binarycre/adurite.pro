

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="text-center p-[10%]">
            <h2 className="text-6xl text-white gborder" style={{fontWeight: 666}}>Your One-Stop Shop for Digital Goods</h2>
            <p className="text-2xl p-3 text-white gborder" style={{fontWeight: 500}}>Explore our collection of digital products.</p>
            <a href="/products" className="btn btn-accent btn-lg text-white">Shop Now</a>
        </section>
    </main>
  );
}
