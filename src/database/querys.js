export const queries = {
  GetAllCoolers: "SELECT * FROM CatalogoCoolers$",
  CreateNewCooler:
    "INSERT INTO CatalogoCoolers$ (IdCooler, ModeloCooler, Marca, Identificador, NumPuertas, SizeCliente,TypeDoor,PotencialVentaMensual,CapacidadBottle, LlenadoPuerta, ConsumoEnergeticoMensual, ConsumoEnergeticoDinero) VALUES (@IdCooler, @ModeloCooler, @Marca, @Identificador, @NumPuertas, @SizeCliente, @TypeDoor, @PotencialVentaMensual, @CapacidadBottle, @LlenadoPuerta, @ConsumoEnergeticoMensual,@ConsumoEnergeticoDinero)",
  GetCoolerbyId: "SELECT * FROM CatalogoCoolers$ WHERE IdCooler = @id",
  DeleteCoolerbyId: "DELETE FROM CatalogoCoolers$ WHERE Idcooler = @id",
  GetTotalNumCoolers: "SELECT COUNT(*) FROM CatalogoCoolers$",
  UpdateCoolerbyId: "UPDATE CatalogoCoolers$ SET ModeloCooler = @ModeloCooler, Marca = @Marca, Identificador = @Identificador, NumPuertas = @NumPuertas, SizeCliente = @SizeCliente, TypeDoor = @TypeDoor, PotencialVentaMensual = @PotencialVentaMensual, CapacidadBottle = @CapacidadBottle, LlenadoPuerta = @LlenadoPuerta, ConsumoEnergeticoMensual = @ConsumoEnergeticoMensual, ConsumoEnergeticoDinero = @ConsumoEnergeticoDinero WHERE IdCooler = @id",
};
