import { Button } from "../_components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "../_components/ui/DataTable";
import { productTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/products/get-products";

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div className="mx-8 my-8 ml-8 mt-8 w-full space-y-8 rounded-lg bg-white p-8">
      {/* CABEÇALHO */}
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text- text-xs font-semibold text-gray-400">
            Produtos
          </span>
          <p className="text-xl font-semibold">Gestão de Produtos</p>
        </div>
        <div className="flex items-end">
          <Button size="sm" className="py-2">
            <Plus size={20} />
            Novo produto
          </Button>
        </div>
      </div>

      {/* LISTAGEM DE PRODUTOS */}
      <div>
        <DataTable columns={productTableColumns} data={products} />
      </div>
    </div>
  );
};

export default ProductsPage;
