export const navLinks = [
  { label: "Burger", href: "#burger" },
  { label: "Poké", href: "#poke" },
  { label: "Créer", href: "#create" },
  { label: "Commander", href: "#commander" },
];

export const burgers = [
  { name: "Khaan", tone: "#D2B27C", detail: "Steak, cheddar, salade, tomate, sauce Khaan", image: "/images/burger-khaan.svg" },
  { name: "B’Khaan", tone: "#F7B733", detail: "Steak, cheddar, bacon, oignons frits, sauce BBQ", image: "/images/burger-bkhaan.svg" },
  { name: "T’Khaan", tone: "#5A220C", detail: "Steak, cheddar, oignons rouges, salade, sauce Khaan", image: "/images/burger-tkhaan.svg" },
  { name: "Chic’Khaan", tone: "#F7B733", detail: "Poulet pané, cheddar, salade, mayo miel", image: "/images/burger-chickhaan.svg" },
  { name: "Black Fish", tone: "#050505", detail: "Poisson pané, cheddar, salade, sauce tartare", image: "/images/burger-black-fish.svg" },
  { name: "Vegget", tone: "#E94B5F", detail: "Galette végétarienne, salade, tomate, sauce Khaan", image: "/images/burger-vegget.svg" },
  { name: "Mex’Khaan", tone: "#F2484B", detail: "Steak, cheddar, jalapeños, sauce spicy, sauce Khaan", image: "/images/burger-mexkhaan.svg" },
];

export const buns = [
  { name: "Brioche", color: "#D2B27C", note: "Doré, moelleux, signature" },
  { name: "Noir", color: "#050505", note: "Intense, graphique, premium" },
  { name: "Rose betterave", color: "#E94B5F", note: "Vif, végétal, inattendu" },
  { name: "Jaune curcuma", color: "#F7B733", note: "Solaire, épicé, gourmand" },
];

export const pokeSteps = [
  "Choisis ta base",
  "Choisis ta protéine",
  "Ajoute tes légumes",
  "Choisis ton fruit",
  "Ajoute ton topping",
  "Choisis ta sauce",
];

export const restaurantShots = [
  { label: "Façade", src: "/images/restaurant-exterior.svg" },
  { label: "Intérieur", src: "/images/restaurant-interior.svg" },
  { label: "Cuisine", src: "/images/restaurant-kitchen.svg" },
  { label: "Équipe", src: "/images/restaurant-team.svg" },
  { label: "Produits", src: "/images/restaurant-products.svg" },
];

// Remplacer ces liens par les URLs réelles de commande, Uber Eats et réseaux sociaux.
export const orderLinks = {
  burger: "#commander-burger",
  poke: "#commander-poke",
  uberEats: "#uber-eats",
  clickCollect: "#click-collect",
  instagram: "#instagram",
  facebook: "#facebook",
};
