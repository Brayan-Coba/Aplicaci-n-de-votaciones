use aplicacion_de_votaciones;

insert into Roles values (null,"Auditor") on duplicate key update Rol = "Auditor" ;
insert into Roles values (null,"Participante") on duplicate key update Rol = "Participante" ;
select * from Roles;

insert into Usuarios values (null,"Geoffrey","Hansen","HGeoffrey" ) on duplicate key update Nombre = "Geoffrey", Apellido = "Hansen", Usuario = "HGeoffrey";
insert into Usuarios values (null,"Aniya","Smith","SAniya") on duplicate key update Nombre = "Aniya", Apellido = "Smith", Usuario = "SAniya";
insert into Usuarios values (null,"Gerald","West","WGerald") on duplicate key update Nombre = "Gerald", Apellido = "West", Usuario = "WGerald";
insert into Usuarios values (null,"Laurel", "McClanahan", "MLaurel") on duplicate key update Nombre = "Laurel", Apellido = "McClanahan", Usuario = "MLaurel";
select * from Usuarios;

insert into Eventos values (null,"Ajedrez") on duplicate key update Evento = "Ajedrez";
insert into Eventos values (null,"Lol") on duplicate key update Evento = "Lol";
insert into Eventos values (null,"Voleibol") on duplicate key update Evento = "Voleibol";
select * from Eventos;

insert into Roles_X_Usuario values (null,1,1) on duplicate key update Roles_idRol = 1, Usuarios_idUsuario = 1;
insert into Roles_X_Usuario values (null,1,2) on duplicate key update Roles_idRol = 1, Usuarios_idUsuario = 2;
insert into Roles_X_Usuario values (null,2,2) on duplicate key update Roles_idRol = 2, Usuarios_idUsuario = 2;
insert into Roles_X_Usuario values (null,2,3) on duplicate key update Roles_idRol = 2, Usuarios_idUsuario = 3;
insert into Roles_X_Usuario values (null,2,4) on duplicate key update Roles_idRol = 2, Usuarios_idUsuario = 4;
select * from Roles_X_Usuario;

insert into Nominados values (null,"Anatoly_Karpov") on duplicate key update Nominado = "Anatoly_Karpov";
insert into Nominados values (null,"Magnus_Carlsen") on duplicate key update Nominado = "Magnus_Carlsen";
insert into Nominados values (null,"Jose_Capablanca") on duplicate key update Nominado = "Jose_Capablanca";
insert into Nominados values (null,"Faker") on duplicate key update Nominado = "Faker";
insert into Nominados values (null,"Dopa") on duplicate key update Nominado = "Dopa";
insert into Nominados values (null,"Seiya") on duplicate key update Nominado = "Seiya";
select * from Nominados;

insert into Nominados_X_Evento values (null,1,1 ) on duplicate key update Nominados_idNominado = 1, Eventos_idEvento = 1;
insert into Nominados_X_Evento values (null,2,1 ) on duplicate key update Nominados_idNominado = 2, Eventos_idEvento = 1;
insert into Nominados_X_Evento values (null,3,1 ) on duplicate key update Nominados_idNominado = 3, Eventos_idEvento = 1;
insert into Nominados_X_Evento values (null,4,2 ) on duplicate key update Nominados_idNominado = 4, Eventos_idEvento = 2;
insert into Nominados_X_Evento values (null,5,2 ) on duplicate key update Nominados_idNominado = 5, Eventos_idEvento = 2;
insert into Nominados_X_Evento values (null,6,2 ) on duplicate key update Nominados_idNominado = 6, Eventos_idEvento = 2;
insert into Nominados_X_Evento values (null,1,3 ) on duplicate key update Nominados_idNominado = 1, Eventos_idEvento = 3;
insert into Nominados_X_Evento values (null,4,3 ) on duplicate key update Nominados_idNominado = 4, Eventos_idEvento = 3;
insert into Nominados_X_Evento values (null,3,3 ) on duplicate key update Nominados_idNominado = 3, Eventos_idEvento = 3;
select * from Nominados_X_Evento;