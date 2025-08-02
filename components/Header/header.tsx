import HeaderClient from "./HeaderClient";
import { GET_MENU_ITEMS_BY_LOCATION } from "@/lib/wp-queries";
import { fetchWordPressQuery } from "@/lib/fetch-wordpress-query";

const Header = async () => {
  const { data } = await fetchWordPressQuery(GET_MENU_ITEMS_BY_LOCATION, { location: "TOP" });
  console.log("datadatadatadatadata",data)
  const mapMenuItem = (node: any): any => ({
    id: node.id,
    label: node.label,
    url: node.uri,
    image: node.image,
    childItems: node.childItems ? {
      edges: node.childItems.edges.map((edge: any) => ({ node: mapMenuItem(edge.node) }))
    } : undefined,
  });
  const menuItems = data?.menuItems?.edges?.map((edge: any) => mapMenuItem(edge.node)) || [];

  return <HeaderClient menuItems={menuItems} />;
};

export default Header;