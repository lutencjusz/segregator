import React from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
    return (
        <footer className="naglowek_footer">
            <h2><br/><br/></h2>
        <h2 className="naglowek_footer_left">
          <Link className="naglowek_a" to="/dodajKandydata"><small>{t("Zarządzanie propozycjami")}</small></Link>
        </h2>
        <h2 className="naglowek_footer_right">
          <a className="naglowek_a" href="mailto:admin@sopim.pl"><small>&copy; Copyright 2020. Sopim</small></a>
        </h2>    
      </footer>
    )
}

export default Footer;