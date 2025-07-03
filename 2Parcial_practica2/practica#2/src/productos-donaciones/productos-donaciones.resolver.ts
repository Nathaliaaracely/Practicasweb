import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductosDonacionesService } from './productos-donaciones.service';
import { ProductosDonacione } from './entities/productos-donacione.entity';
import { CreateProductosDonacioneInput } from './dto/create-productos-donacione.input';
import { UpdateProductosDonacioneInput } from './dto/update-productos-donacione.input';

@Resolver(() => ProductosDonacione)
export class ProductosDonacionesResolver {
  constructor(private readonly productosDonacionesService: ProductosDonacionesService) {}

  @Mutation(() => ProductosDonacione)
  createProductosDonacione(@Args('createProductosDonacioneInput') createProductosDonacioneInput: CreateProductosDonacioneInput) {
    return this.productosDonacionesService.create(createProductosDonacioneInput);
  }

  @Query(() => [ProductosDonacione], { name: 'productosDonaciones' })
  findAll() {
    return this.productosDonacionesService.findAll();
  }

  @Query(() => ProductosDonacione, { name: 'productosDonacione' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.productosDonacionesService.findOne(id);
  }

  @Mutation(() => ProductosDonacione)
  updateProductosDonacione(@Args('updateProductosDonacioneInput') updateProductosDonacioneInput: UpdateProductosDonacioneInput) {
    return this.productosDonacionesService.update(updateProductosDonacioneInput.id, updateProductosDonacioneInput);
  }

  @Mutation(() => ProductosDonacione)
  removeProductosDonacione(@Args('id', { type: () => Int }) id: string) {
    return this.productosDonacionesService.remove(id);
  }
}
