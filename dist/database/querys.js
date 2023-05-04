"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  GetAllCoolers: "SELECT * FROM CatalogoCoolers$",
  CreateNewCooler: "INSERT INTO CatalogoCoolers$ (IdCooler, ModeloCooler, Marca, Identificador, NumPuertas, SizeCliente,TypeDoor,PotencialVentaMensual,CapacidadBottle, LlenadoPuerta, ConsumoEnergeticoMensual, ConsumoEnergeticoDinero) VALUES (@IdCooler, @ModeloCooler, @Marca, @Identificador, @NumPuertas, @SizeCliente, @TypeDoor, @PotencialVentaMensual, @CapacidadBottle, @LlenadoPuerta, @ConsumoEnergeticoMensual,@ConsumoEnergeticoDinero)",
  GetCoolerbyId: "SELECT * FROM CatalogoCoolers$ WHERE IdCooler = @id",
  DeleteCoolerbyId: "DELETE FROM CatalogoCoolers$ WHERE Idcooler = @id",
  GetTotalNumCoolers: "SELECT COUNT(*) FROM CatalogoCoolers$",
  UpdateCoolerbyId: "UPDATE CatalogoCoolers$ SET ModeloCooler = @ModeloCooler, Marca = @Marca, Identificador = @Identificador, NumPuertas = @NumPuertas, SizeCliente = @SizeCliente, TypeDoor = @TypeDoor, PotencialVentaMensual = @PotencialVentaMensual, CapacidadBottle = @CapacidadBottle, LlenadoPuerta = @LlenadoPuerta, ConsumoEnergeticoMensual = @ConsumoEnergeticoMensual, ConsumoEnergeticoDinero = @ConsumoEnergeticoDinero WHERE IdCooler = @id",
  GetTotalOrders: "select Solicitud.IdSolicitud, FechaSolicitud, count(CoolerSolicitado.IdCS) as 'Cantidad de Coolers' from Solicitud join CoolerSolicitado on Solicitud.IdSolicitud = CoolerSolicitado.IdSolicitud group by Solicitud.IdSolicitud, FechaSolicitud order by FechaSolicitud desc",
  GetOrdersCancel: "select Solicitud.IdSolicitud, FechaSolicitud, StatusSolicitud, count(CoolerSolicitado.IdCS) as 'Cantidad de Coolers' from Solicitud join CoolerSolicitado on Solicitud.IdSolicitud = CoolerSolicitado.IdSolicitud where StatusSolicitud = 'Cancelada' or StatusSolicitud = 'Pendiente' group by Solicitud.IdSolicitud, FechaSolicitud, StatusSolicitud order by FechaSolicitud desc",
  GetBestSelling: "select top 1 ModeloCooler, ImagenCooler, count(*) as 'Cantidad de Coolers' from Cooler join CoolerSolicitado on Cooler.IdCooler = CoolerSolicitado.IdCooler where StatusCooler = 'Entregado' or StatusCooler = 'Pendiente' group by ModeloCooler, ImagenCooler order by count(*) desc ",
  GetNewPartners: "SELECT MONTH(FechaRegistro) AS 'Mes', COUNT(*) AS 'Negocios Registrados en el ultimo mes' FROM Negocio JOIN Visita ON Negocio.IdNegocio = Visita.IdNegocio JOIN Solicitud ON Visita.IdVisita = Solicitud.IdVisita JOIN Admin ON Solicitud.IdAdmin = Admin.IdEmpleado WHERE MONTH(FechaRegistro) = MONTH(GETDATE()) GROUP BY MONTH(FechaRegistro)",
  GetNewPartnersDesarrolladorById: "select month(FechaRegistro) as 'Mes', count(*) as 'Negocios Registrados en el ultimo mes' from Negocio join Visita on Negocio.IdNegocio = Visita.IdNegocio join Desarrollador on Visita.IdEmpleado = Desarrollador.IdEmpleado where month(FechaRegistro) = month(getdate()) and Desarrollador.IdEmpleado = '357866' group by month(FechaRegistro)",
  GetTotalPartners: "select Admin.IdEmpleado, count(*) as 'Negocios Registrados' from Negocio join Visita on Negocio.IdNegocio = Visita.IdNegocio join Solicitud on Visita.IdVisita = Solicitud.IdVisita join Admin on Solicitud.IdAdmin = Admin.IdEmpleado where Admin.IdEmpleado = '450219' group by Admin.IdEmpleado",
  GetTotalPartnersDesarrolladorById: "select Admin.IdEmpleado, count(*) as 'Negocios Registrados' from Negocio join Visita on Negocio.IdNegocio = Visita.IdNegocio join Solicitud on Visita.IdVisita = Solicitud.IdVisita join Admin on Solicitud.IdAdmin = Admin.IdEmpleado where Admin.IdEmpleado = '450219' group by Admin.IdEmpleado",
  GetTotalOnLocation: "select Admin.IdEmpleado, count(*) as 'Coolers Aceptados' from CoolerSolicitado join Solicitud on Solicitud.IdSolicitud = CoolerSolicitado.IdSolicitud join Admin on Solicitud.IdAdmin = Admin.IdEmpleado and StatusCooler = 'Entregado' where Admin.IdEmpleado = '450219' group by Admin.IdEmpleado",
  GetTotalOnLocationDesarrolladorById: "select Admin.IdEmpleado, count(*) as 'Coolers Aceptados' from CoolerSolicitado join Solicitud on Solicitud.IdSolicitud = CoolerSolicitado.IdSolicitud join Admin on Solicitud.IdAdmin = Admin.IdEmpleado and StatusCooler = 'Entregado' where Admin.IdEmpleado = '450219' group by Admin.IdEmpleado",
  GetMonthlySolicitud: "select month(FechaSolicitud) as 'Mes' , count(*) as 'Solicitudes' from Solicitud group by month(FechaSolicitud)",
  GetBestSeller: "select D.IdEmpleado, D.FnameEmpleado, D.LnameEmpleado, isnull(S.[Solicitudes Aceptadas], 0) as 'Solicitudes Aceptadas' from Desarrollador D left join ( select IdDesarrollador, count(*) as 'Solicitudes Aceptadas' from Solicitud where StatusSolicitud = 'Aceptada' or StatusSolicitud = 'Pendiente' or StatusSolicitud = 'Completada' group by IdDesarrollador ) S on D.IdEmpleado = S.IdDesarrollador",
  GetCredencialesAuth: "select perfil, username, contraseña, d.IdEmpleado as IdDesarrollador, a.IdEmpleado as IdAdmin, c.IdEmpleado as IdChofer from Usuarios u full outer join Desarrollador d on u.IdUsuario = d.IdUsuario full outer join Admin a on u.IdUsuario = a.IdUsuario full outer join Chofer c on u.IdUsuario = c.IdUsuario where username = @username and contraseña = @password",
  GetOrdersAcepted: "SELECT Solicitud.IdSolicitud, FechaSolicitud, StatusSolicitud, COUNT(CoolerSolicitado.IdCS) AS 'Cantidad de Coolers' FROM Solicitud JOIN CoolerSolicitado ON Solicitud.IdSolicitud = CoolerSolicitado.IdSolicitud WHERE StatusSolicitud = 'Aceptada' GROUP BY Solicitud.IdSolicitud, FechaSolicitud, StatusSolicitud ORDER BY FechaSolicitud DESC",
  xxx: ""
  // No desarrollados!
  // GetCredencialesAuth es : @username y @password
};
exports.queries = queries;