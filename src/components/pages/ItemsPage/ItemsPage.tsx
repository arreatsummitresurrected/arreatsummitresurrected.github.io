import React from "react";
import { useNavigation } from "react-router-dom";

function ItemsPage() {
  const navigation = useNavigation();

  return <div>{navigation.state}</div>;
}

export default ItemsPage;
