create database dbcampana_app

use dbcamapana_app;

CREATE TABLE `cliente` (
    `idCliente` int(11) NOT NULL AUTO_INCREMENT,
    `nombre` varchar(100) NOT NULL,
    `estado` tinyint(1) NOT NULL,
    PRIMARY KEY (`idCliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `usuario` (
    `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
    `idCliente` int(11) NOT NULL,
    `usuario` varchar(30) NOT NULL,
    `estado` tinyint(1) NOT NULL,
    PRIMARY KEY (`idUsuario`),
    FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`idCliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `campania` (
    `idCampania` int(11) NOT NULL AUTO_INCREMENT,
    `nombre` varchar(200) NOT NULL,
    `idUsuario` int(11) NOT NULL,
    `fechaHoraProgramacion` datetime NOT NULL,
    `estado` tinyint(1) NOT NULL,
    PRIMARY KEY (`idCampania`),
    FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `mensaje` (
    `idMensaje` int(11) NOT NULL AUTO_INCREMENT,
    `idCampania` int(11) not null,
    `estadoEnvio` int NOT NULL,
    `fechaHoraEnvio` datetime NOT NULL,
    `mensaje` varchar(160) NOT NULL,
    `estado` tinyint(1) NOT NULL,
    PRIMARY KEY (`idMensaje`),
    FOREIGN KEY (`idCampania`) REFERENCES `campania` (`idCampania`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO cliente (nombre, estado) VALUES ('Sebastian', 1), ('Pedro', 1);

INSERT INTO usuario (idCliente, usuario, estado) VALUES (1, 'Piero', 1), (2, 'Brandon', 1);

INSERT INTO campania (nombre, idUsuario, fechaHoraProgramacion, estado) VALUES ('Campaña Inicial', 1, NOW(), 1);

INSERT INTO mensaje (idCampania, estadoEnvio, fechaHoraEnvio, mensaje, estado) VALUES (1, 1, NOW(), 'Mensaje de prueba 1', 1);



SELECT m.idMensaje, m.mensaje, m.estadoEnvio
FROM mensaje m
JOIN campania c ON m.idCampania = c.idCampania
WHERE MONTH(c.fechaHoraProgramacion) = "12" AND c.idUsuario = 1
GROUP BY m.estadoEnvio;




