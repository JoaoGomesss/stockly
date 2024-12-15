const Sidebar = () => {
  return (
    <div className="bg-white w-64 h-screen">
      {/* LOGO */}
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold text-[#00A180]">STOCKLY</h1>
      </div>

      {/* BOTÕES */}
      <div className="flex flex-col gap-2 p-2 ">
        <button className="px-6 py-3 text-sm text-start">Dashboard</button>
        <button className="px-6 py-3 text-sm text-start">Produtos</button>
        <button className="px-6 py-3 text-sm text-start">Vendas</button>
      </div>
    </div>
  );
};

export default Sidebar;
