import { DataTable } from "../_components/ui/DataTable";
import { productTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/products/get-products";
import AddProductButton from "./_components/create-products-button";

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div className="m-8 w-full space-y-8 overflow-auto rounded-lg bg-white p-8">
      {/* CABEÇALHO */}
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text- text-xs font-semibold text-gray-400">
            Produtos
          </span>
          <p className="text-xl font-semibold">Gestão de Produtos</p>
        </div>
        <div className="flex items-end">
          <AddProductButton />
        </div>
      </div>

      {/* LISTAGEM DE PRODUTOS */}
      <div>
        <DataTable
          columns={productTableColumns}
          data={JSON.parse(JSON.stringify(products))}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
