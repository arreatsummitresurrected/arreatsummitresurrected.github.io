import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import HeaderAndLayout from "../../../components/HeaderAndLayout";

function ItemIndexPage() {
  const navigation = useNavigation();

  const renderContent = () => {
    return window.location.pathname.endsWith("items") ? getContent() : <></>;
  };

  const getContent = () => {
    return <>IndexPage</>;
  };

  return renderContent();
}

export default ItemIndexPage;
