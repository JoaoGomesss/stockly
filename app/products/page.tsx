// import { db } from "../_lib/prisma";

import { Button } from "../_components/ui/button";
import { Plus } from "lucide-react";

const ProductsPage = async () => {
  // const products = await db.product.findMany();
  return (
    <div className="w-full space-y-8 p-8">
      {/* CABEÇALHO */}
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-[#00A180]">Produtos</span>
          <p className="text-xl font-semibold">Gestão de Produtos</p>
        </div>
        <div className="flex items-end">
          <Button size="sm" className="bg-[#00A180] py-2">
            <Plus size={20} />
            Novo produto
          </Button>
        </div>
      </div>

      {/* LISTAGEM DE PRODUTOS */}
      <div></div>
    </div>
  );
};

export default ProductsPage;
