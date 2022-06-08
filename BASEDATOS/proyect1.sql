/* ----- CREAR BASE DE DATOS ----- */
create schema TrainingProject;
use TrainingProject;

/* ----- PAIS ----- */
/* https://web.sispro.gov.co/WebPublico/Consultas/ConsultarDetalleReferenciaBasica.aspx?Code=Pais */
create table country(
code char(3) primary key not null,
name char(50) not null
);

/* ----- DEPARTAMENTO ----- */
/* https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/2012/departamentos_2012.pdf */
create table department(
code char(2) primary key not null,
name char(30) not null,
countryCode char(3) not null,
constraint FK_countryCode_department foreign key (countryCode)
references country(code)
);

/* ----- CIUDAD ----- */
/* https://www.ccbarranca.org.co/ccbar/images/documentos/codigos_municipios_dane.pdf */
create table city(
code char(5) primary key not null,
name char(50) not null,
departmentCode char(2) not null,
constraint FK_departmentCode_city foreign key (departmentCode)
references department(code)
);

/* ----- USUARIO ----- */
create table user(
identificationNumber char(20) primary key not null,
fullName varchar(100) not null,
email varchar(100) not null,
state  boolean not null,
password varchar(500) not null,
cityCode char(5) not null,
constraint FK_cityCode_user foreign key (cityCode)
references city(code)
);

/* ----- REPORTEDOCUMENTO ----- */
create table documentReport(
id int primary key not null auto_increment,
documentNumber char(20) not null,
fullName varchar(100) not null,
email varchar(100) not null,
description varchar(1000),
date date not null,
state boolean not null,
category boolean not null,
userIdentificationNumber char(20),
cityCode char(5) not null,
constraint FK_userIdentificationNumber_documentReport foreign key (userIdentificationNumber)
references user(identificationNumber),
constraint FK_cityCode_documentReport foreign key (cityCode)
references city(code)
);

/* ----- IMAGENES ----- */
create table image(
id int primary key not null auto_increment,
url varchar(1000) not null,
documentReportId int not null,
constraint FK_documentReportId_image foreign key (documentReportId)
references documentReport(id)
);

/* ----- TIPODOCUMENTO ----- */
create table documentType(
id int primary key not null auto_increment,
name varchar(100) not null
);

/* ----- TIPODOCUMENTO_REPORTEDOCUMENTO ----- */
create table documentType_documentReport(
id int primary key not null auto_increment,
documentTypeId int not null,
documentReportId int not null,
constraint FK_documentTypeId_documentType_documentReport foreign key (documentTypeId)
references documentType(id),
constraint FK_documentReportId_documentType_documentReport foreign key (documentReportId)
references documentReport(id)
);

/* ----- TIENDA ----- */
create table shop(
nit char(20) primary key not null,
name varchar(100) not null,
email varchar(100) not null,
state  boolean not null,
password varchar(500) not null,
cityCode char(5) not null,
constraint FK_cityCode_shop foreign key (cityCode)
references city(code)
);


/* ------------------------------------------------------------------------------------------------------------------------------------------------- */

/* ----- AGREGAR PAIS ----- */
insert into country(code, name) values("170", "Colombia");

/* ----- AGREGAR DEPARTAMENTO ----- */
insert into department(code, name, countryCode) values("63", "Quindío", "170");

/* ----- AGREGAR CIUDAD ----- */
insert into city(code, name, departmentCode) values("63001", "Armenia", "63");