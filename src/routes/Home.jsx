import "../categories.styles.scss";
import Directory from "../components/Directory/Directory.component";

const categories = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "hats",
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "jackets",
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: "sneakers",
  },
  {
    title: "women",
    imageUrl: "https://i.ibb.co/GCCdy8t/women.png",
    size: "large",
    id: 4,
    linkUrl: "women",
  },
  {
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    id: 5,
    linkUrl: "mens",
  },
];
function Home() {
  return (
    <div className="categories-container">
      <Directory categories={categories} />
    </div>
  );
}

export default Home;
