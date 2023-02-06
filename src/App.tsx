import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import GlobalLayout from "./components/pages/GlobalLayout";
import Home from "./components/pages/HomePage";
import "./App.scss";
import ItemIndexPage from "./components/pages/ItemPages/ItemIndexPage";
import GemsPage from "./components/pages/ItemPages/GemsPage";
import SocketedItemPage from "./components/pages/ItemPages/SocketedItemPage";
import WeaponsAndArmor from "./components/pages/ItemPages/WeaponsAndArmor";
import JewelsPage from "./components/pages/ItemPages/JewelsPage";
import RunesPage from "./components/pages/ItemPages/RunesPage";
import RunewordsPage from "./components/pages/ItemPages/RunewordsPage";
import MagicItemPage from "./components/pages/ItemPages/MagicItemPage";
import CraftedItemsPage from "./components/pages/ItemPages/CraftedItemsPage";
import SetItemsPage from "./components/pages/ItemPages/SetItemsPage";
import UniqueItemsPage from "./components/pages/ItemPages/UniqueItemsPage";
import CharmsPage from "./components/pages/ItemPages/CharmsPage";
import TheHoradricCubePage from "./components/pages/ItemPages/TheHoradricCubePage";
import ItemBasicPage from "./components/pages/ItemPages/ItemBasicPage";
import HeaderAndLayout from "./components/components/HeaderAndLayout";
import NonExistingPage from "./components/pages/NonExistingPage";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GlobalLayout />}>
      <Route index element={<Home />} />
      <Route path="items" element={<HeaderAndLayout />}>
        <Route index element={<ItemIndexPage />} />
        <Route path="basics" element={<ItemBasicPage />} />
        <Route path="weaponsandarmor" element={<WeaponsAndArmor />} />
        <Route path="socketeditems" element={<SocketedItemPage />} />
        <Route path="gems" element={<GemsPage />} />
        <Route path="jewels" element={<JewelsPage />} />
        <Route path="runes" element={<RunesPage />} />
        <Route path="runewords" element={<RunewordsPage />} />
        <Route path="magic" element={<MagicItemPage />} />
        <Route path="crafteditems" element={<CraftedItemsPage />} />
        <Route path="sets" element={<SetItemsPage />} />
        <Route path="uniques" element={<UniqueItemsPage />} />
        <Route path="charms" element={<CharmsPage />} />
        <Route path="cube" element={<TheHoradricCubePage />} />
      </Route>
      <Route path="/404" element={<NonExistingPage />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Route>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}
