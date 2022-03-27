import React from "react";

function BannerName({ name, discount, more }) {
  const currency = "R$";
  return (
    <div className="bannerContent">
      <h3>Olá {name},</h3>
      <p>
        Ganhe desconto grátis para cada<span>{`${currency}${discount}`}</span>{" "}
        comprar
      </p>
      <a href={more}>Saber mais</a>
    </div>
  );
}

export default BannerName;
