import HeaderClient from "./HeaderClient";
import { GET_MENU_ITEMS } from "@/lib/wp-queries";
import { fetchWordPressQuery } from "@/lib/fetch-wordpress-query";

const Header = async () => {
  const { data } = await fetchWordPressQuery(GET_MENU_ITEMS, { parentId: "0" });
  const menuItems = data?.menuItems?.edges?.map((edge: any) => edge.node) || [];

  return <HeaderClient menuItems={menuItems} />;
};

export default Header;