import React from "react";
import Empty from "./icons/empty";

const EmptyPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-96">
      <Empty className="mx-auto w-8 h-8 mb-2 text-principal-secondary" />
      <h1 className="text-dark-100">Nenhum Artigo Encontrado</h1>
    </div>
  );
};

export default EmptyPage;
