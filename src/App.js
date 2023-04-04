import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';

export default function BasicDemo() {
  return (
    <div className="bg-white p-5 flex flex-column gap-3 border-round-lg">
      <div className="flex align-items-start justify-content-between  border-round-lg ">
        <div className="flex flex-column gap-3  ">
          <img
            className="border-round-lg bg-indigo-100 p-2"
            src="https://i.ibb.co/9pL0hHB/Icon.png"
          />
        </div>
      </div>

      <div className="flex flex-column gap-3  ">
        <p className="text-indigo-500 font-bold text-base ">
          Datos de la empresa
        </p>
      </div>

      <div className="">
        <div class="flex gap-3">
          <div class="flex-1 ">
            <div>
              <div className="flex flex-column gap-3  ">
                <label htmlFor="" className="text-sm font-bold ">
                  Tipo de Cliente
                </label>
                <Dropdown
                  name="tipo"
                  id="tipo"
                  value={''}
                  onChange={(e) => setTipoCliente(e.value)}
                  options={''}
                  optionLabel="name"
                  placeholder="tipo cliente"
                  className=""
                />
              </div>
              <div className="flex flex-column gap-3  ">
                <label htmlFor="Ruc" className="text-sm font-bold ">
                  RUC
                </label>
                <InputText
                  onChange={(e) => setRuc(e.value)}
                  id="Ruc"
                  name="Ruc"
                  type="text"
                  className=""
                  placeholder="Escriba el número de RUC aquí"
                />
              </div>
              <div className="flex flex-column gap-3  ">
                <label htmlFor="RazonS" className="text-sm font-bold ">
                  Razón Social
                </label>
                <InputText
                  onChange={(e) => setRuc(e.value)}
                  id="RazonS"
                  name="RazonS"
                  type="text"
                  className=""
                  placeholder="Bregma S.A.C"
                />
              </div>
              <div className="flex flex-column gap-3  ">
                <label htmlFor="" className="text-sm font-bold ">
                  Ubicacion
                </label>
                <Dropdown
                  name=""
                  id=""
                  value={''}
                  onChange={(e) => setUbicacion(e.value)}
                  options={''}
                  optionLabel="name"
                  placeholder="Departamento"
                  className=""
                />
                <Dropdown
                  name=""
                  id=""
                  value={''}
                  onChange={(e) => setUbicacion(e.value)}
                  options={''}
                  optionLabel="name"
                  placeholder="Provinvia"
                  className=""
                />
                <Dropdown
                  name=""
                  id=""
                  value={''}
                  onChange={(e) => setUbicacion(e.value)}
                  options={''}
                  optionLabel="name"
                  placeholder="Distrito"
                  className=""
                />
              </div>
              <div className="flex flex-column  gap-3  ">
                <label htmlFor="Dirección" className="text-sm font-bold ">
                  Dirección
                </label>
                <InputText
                  onChange={(e) => setDireccion(e.value)}
                  id="Dirección"
                  name="Dirección"
                  type="text"
                  className=""
                  placeholder="Av.Dylan Quintanilla #5"
                />
              </div>
              <div className="flex flex-column gap-3  ">
                <label htmlFor="UbicaciónM" className="text-sm font-bold ">
                  Ubicación del Mapa
                </label>
                <div className="flex w-full content-center gap-3 ">
                  <InputText
                    onChange={(e) => setDireccion(e.value)}
                    id="UbicaciónM"
                    name="UbicaciónM"
                    type="text"
                    className="w-full"
                    placeholder="Ubicación del Local"
                  />
                  <div className="flex gap-3 ">
                    <img
                      className="border-round-lg bg-indigo-100 p-2"
                      src="https://i.ibb.co/9Y5W8Pn/Icon.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-1 ">
            <div className="flex flex-column gap-3  ">
              <label htmlFor="UbicaciónM" className="text-sm font-bold ">
                Aniversario
              </label>
              <div className="flex w-full content-center gap-3 ">
                <Calendar
                  value={''}
                  onChange={(e) => setDate(e.value)}
                  showIcon
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex flex-column gap-3  ">
              <label htmlFor="" className="text-sm font-bold ">
                Rubro
              </label>
              <Dropdown
                name="Rubro"
                id="Rubro"
                value={''}
                onChange={(e) => setRubro(e.value)}
                options={''}
                optionLabel="name"
                placeholder="Gestión medica"
                className=""
              />
            </div>

            <div className="flex flex-column gap-3  ">
              <label htmlFor="CantTrabajadores" className="text-sm font-bold ">
                Cantidad de trabajadores
              </label>
              <InputText
                onChange={(e) => setRuc(e.value)}
                id="CantTrabajadores"
                name="CantTrabajadores"
                type="text"
                className=""
                placeholder="000"
              />
            </div>

            <div className="flex flex-column gap-3  ">
              <label htmlFor="AñosAct" className="text-sm font-bold ">
                Años de actividad
              </label>
              <InputText
                onChange={(e) => setRuc(e.value)}
                id="AñosAct"
                name="AñosAct"
                type="text"
                className=""
                placeholder="0 años"
              />
            </div>

            <div className="flex flex-column gap-3  ">
              <label htmlFor="Logo" className="text-sm font-bold ">
                Logo
              </label>
              <div className="bg-indigo-100 flex flex-column gap-3 border-round-lg border-dashed border-indigo-300">
                <div>
                    <label className="text-indigo-400 justify-content-center text-sm flex mt-3">Arrastre y coloque su logo aquí</label>
                    <label className="text-indigo-500 font-bold justify-content-center text-sm flex mt-4">Recomendaciones:</label>
                    <label className="text-indigo-400 justify-content-center text-sm flex ">*Tamaño de 500 x 500px</label>
                    <label className="text-indigo-400 justify-content-center text-sm flex ">*Alta calidad</label>
                    <label className="text-indigo-400 justify-content-center text-sm flex mb-2">*Formato .png o .svg</label>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-1 h-1rem bg-indigo-500 text-white font-bold text-center p-4 border-round">
            3
          </div>
        </div>
      </div>
    </div>
  );
}
